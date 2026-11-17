/**
 * Web Audio API 기반 효과음 — 외부 오디오 파일 없이 오실레이터/노이즈로 합성한다.
 * 브라우저 정책상 사용자 제스처(티오프 버튼 등) 이후 unlock()을 호출해야 소리가 난다.
 */
export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private _muted = false;

  constructor() {
    try {
      this._muted = localStorage.getItem('oneone:muted') === '1';
    } catch {
      this._muted = false;
    }
  }

  get muted(): boolean {
    return this._muted;
  }

  setMuted(muted: boolean): void {
    this._muted = muted;
    try {
      localStorage.setItem('oneone:muted', muted ? '1' : '0');
    } catch {
      /* 저장 실패는 무시 */
    }
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(muted ? 0 : 0.9, this.ctx.currentTime, 0.02);
    }
  }

  /** 첫 사용자 제스처에서 호출 */
  unlock(): void {
    if (typeof window === 'undefined') return;
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;

    if (!this.ctx) {
      try {
        this.ctx = new Ctor();
        this.master = this.ctx.createGain();
        this.master.gain.value = this._muted ? 0 : 0.9;
        this.master.connect(this.ctx.destination);
      } catch {
        this.ctx = null;
        return;
      }
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  private get out(): GainNode | null {
    if (!this.ctx || !this.master) return null;
    if (this._muted) return null;
    return this.master;
  }

  private tone(
    freq: number,
    duration: number,
    type: OscillatorType = 'sine',
    peak = 0.25,
    slideTo?: number,
    delay = 0,
  ): void {
    const out = this.out;
    if (!out || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + duration);
    }
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t0 + Math.min(0.02, duration * 0.3));
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain).connect(out);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  private noise(duration: number, peak: number, filterFrom: number, filterTo: number, delay = 0): void {
    const out = this.out;
    if (!out || !this.ctx) return;
    const ctx = this.ctx;
    if (!this.noiseBuffer) {
      const len = Math.floor(ctx.sampleRate * 0.6);
      const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < len; i += 1) {
        data[i] = Math.random() * 2 - 1;
      }
      this.noiseBuffer = buffer;
    }
    const t0 = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFrom, t0);
    filter.frequency.exponentialRampToValueAtTime(Math.max(80, filterTo), t0 + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(Math.max(0.0002, peak), t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    src.connect(filter).connect(gain).connect(out);
    src.start(t0);
    src.stop(t0 + duration + 0.02);
  }

  /** 클럽별 스윙 사운드 (드라이버는 묵직한 '퍽', 퍼터는 가벼운 '톡') */
  shot(club: string, power: number): void {
    const p = Math.min(1, Math.max(0.2, power));
    if (club === 'putter') {
      this.putt(power);
      return;
    }
    if (club === 'driver' || club === 'wood') {
      this.noise(0.16, 0.32 * p, 3000, 320);
      this.tone(120 + 40 * p, 0.2, 'triangle', 0.22 * p, 58);
      this.tone(220, 0.08, 'sine', 0.07 * p, 120);
      return;
    }
    if (club === 'iron') {
      this.noise(0.1, 0.26 * p, 3600, 800);
      this.tone(300 + 80 * p, 0.1, 'square', 0.07 * p, 170);
      return;
    }
    this.noise(0.11, 0.2 * p, 2800, 600);
    this.tone(240, 0.12, 'sine', 0.1 * p, 110);
  }

  putt(power: number): void {
    const p = Math.min(1, Math.max(0.15, power));
    this.noise(0.06, 0.16 * p, 2400, 700);
    this.tone(190 + 60 * p, 0.12, 'triangle', 0.16 * p, 70);
  }

  bounce(strength: number): void {
    const s = Math.min(1, Math.max(0.05, strength));
    this.tone(880, 0.05, 'triangle', 0.05 * s, 520);
  }

  cup(): void {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => this.tone(f, 0.22, 'sine', 0.2, undefined, i * 0.075));
    notes.forEach((f, i) => this.tone(f * 2, 0.16, 'triangle', 0.05, undefined, i * 0.075));
  }

  fanfare(): void {
    const seq: Array<[number, number]> = [
      [392, 0],
      [523.25, 0.1],
      [659.25, 0.2],
      [783.99, 0.3],
      [1046.5, 0.42],
    ];
    seq.forEach(([f, d]) => this.tone(f, 0.32, 'sine', 0.17, undefined, d));
    seq.forEach(([f, d]) => this.tone(f * 1.5, 0.2, 'triangle', 0.045, undefined, d + 0.02));
  }

  water(): void {
    this.noise(0.55, 0.24, 1600, 180);
    this.tone(420, 0.45, 'sine', 0.12, 90);
  }

  emoji(): void {
    this.tone(880, 0.08, 'square', 0.06, 1180);
    this.tone(1320, 0.07, 'sine', 0.05, undefined, 0.06);
  }

  ui(): void {
    this.tone(660, 0.06, 'sine', 0.07, 880);
  }

  /** 플레이룸 게이트 통과 — 위로 솟는 반짝임 */
  portal(): void {
    this.tone(392, 0.5, 'sine', 0.1, 880);
    this.tone(587.33, 0.5, 'triangle', 0.06, 1174.66, 0.06);
    this.noise(0.4, 0.05, 5200, 1400);
  }
}
