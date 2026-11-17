import type { Game } from './game';

interface InputHooks {
  onToggleMute?: () => void;
  onToggleHelp?: () => void;
  /** false 면 입력을 무시한다 (대기실에서는 게임 조작이 꺼진다) */
  isActive?: () => boolean;
}

/**
 * 캔버스 포인터(마우스/터치)와 키보드를 골프 조작으로 연결한다.
 *
 * - 화면 좌우 드래그: 조준 회전
 * - ←/→ 또는 A/D: 조준 미세 회전
 * - 스페이스/엔터: 스윙 게이지 탭 (시작 → 파워 → 임팩트)
 * - R: 공 되돌리기(+1벌타) · M: 소리 · H: 도움말
 */
export class InputController {
  constructor(
    private readonly element: HTMLCanvasElement,
    private readonly game: Game,
    private readonly hooks: InputHooks = {},
  ) {
    element.addEventListener('pointerdown', this.handleDown);
    element.addEventListener('pointermove', this.handleMove);
    element.addEventListener('pointerup', this.handleUp);
    element.addEventListener('pointercancel', this.handleCancel);
    element.addEventListener('contextmenu', (event) => event.preventDefault());
    window.addEventListener('keydown', this.handleKey);
  }

  private handleDown = (event: PointerEvent): void => {
    if (this.hooks.isActive && !this.hooks.isActive()) return;
    this.element.setPointerCapture?.(event.pointerId);
    this.game.pointerDown(event.clientX, event.clientY, event.pointerId, event.button);
  };

  private handleMove = (event: PointerEvent): void => {
    if (this.hooks.isActive && !this.hooks.isActive()) return;
    this.game.pointerMove(event.clientX, event.clientY, event.pointerId);
  };

  private handleUp = (event: PointerEvent): void => {
    if (this.hooks.isActive && !this.hooks.isActive()) return;
    this.game.pointerUp(event.pointerId);
  };

  private handleCancel = (event: PointerEvent): void => {
    if (this.hooks.isActive && !this.hooks.isActive()) return;
    this.game.pointerCancel(event.pointerId);
  };

  private handleKey = (event: KeyboardEvent): void => {
    if (this.hooks.isActive && !this.hooks.isActive()) return;
    const target = event.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;

    switch (event.key.toLowerCase()) {
      case 'a':
      case 'arrowleft':
        event.preventDefault();
        this.game.aimBy(-0.04);
        break;
      case 'd':
      case 'arrowright':
        event.preventDefault();
        this.game.aimBy(0.04);
        break;
      case ' ':
      case 'enter':
        event.preventDefault();
        this.game.swingTap();
        break;
      case 'r':
        this.game.resetBall();
        break;
      case 'm':
        this.hooks.onToggleMute?.();
        break;
      case 'h':
      case '?':
        this.hooks.onToggleHelp?.();
        break;
      default:
        break;
    }
  };

  dispose(): void {
    this.element.removeEventListener('pointerdown', this.handleDown);
    this.element.removeEventListener('pointermove', this.handleMove);
    this.element.removeEventListener('pointerup', this.handleUp);
    this.element.removeEventListener('pointercancel', this.handleCancel);
    window.removeEventListener('keydown', this.handleKey);
  }
}
