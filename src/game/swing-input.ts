import type { Game } from './game';

interface HoldControlOptions {
  /** 버튼/게이지를 누른 순간 (오디오 잠금 해제 등) */
  onPress?: () => void;
}

/**
 * 스윙 버튼·게이지에 '꾹 눌러 파워 → 떼면 확정' 조작을 연결한다.
 *
 * - `pointerdown` — 파워 게이지가 차오르기 시작 (정확도 단계에서는 임팩트 타이밍 탭)
 * - `pointerup` — 그 지점의 파워가 확정된다
 * - `pointercancel` / 포인터 캡처 상실 — 누르고 있던 홀드는 무효 (실수로 샷이 나가지 않게)
 *
 * 포인터를 잡아 두므로(pointer capture) 버튼 밖으로 손가락이 벗어나도 떼는 순간을 놓치지 않는다.
 */
export function bindHoldControl(element: HTMLElement, game: Game, options: HoldControlOptions = {}): void {
  element.addEventListener('pointerdown', (event) => {
    const pointer = event as PointerEvent;
    if (pointer.pointerType === 'mouse' && pointer.button !== 0) return;
    event.preventDefault();
    options.onPress?.();
    element.setPointerCapture?.(pointer.pointerId);
    game.swingPress();
  });

  element.addEventListener('pointerup', (event) => {
    event.preventDefault();
    game.swingRelease();
  });

  element.addEventListener('pointercancel', () => game.swingCancel());
  element.addEventListener('lostpointercapture', () => game.swingCancel());

  // 포인터·키보드 홀드가 처리하므로 click 으로 한 번 더 스윙하지 않도록 막는다
  element.addEventListener('click', (event) => event.preventDefault());
}
