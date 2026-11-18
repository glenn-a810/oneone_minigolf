import type { Game } from './game';

interface InputHooks {
  onToggleMute?: () => void;
  onToggleHelp?: () => void;
  /** 카메라 뷰 전환 (백뷰 → 타겟뷰 → 탑뷰) */
  onToggleView?: () => void;
  /** false 면 입력을 무시한다 (대기실에서는 게임 조작이 꺼진다) */
  isActive?: () => boolean;
}

/**
 * 캔버스 포인터(마우스/터치)와 키보드를 골프 조작으로 연결한다.
 *
 * - 화면 좌우 드래그: 조준 회전
 * - ←/→ 또는 A/D: 조준 미세 회전
 * - 스페이스/엔터: 누르고 있으면 파워 게이지가 차오르고, 떼는 순간 파워 확정 → 다음 탭이 임팩트
 * - R: 공 되돌리기(+1벌타) · M: 소리 · H: 도움말 · V: 뷰 전환
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
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('blur', this.handleBlur);
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
        // 키를 누르고 있는 동안 파워가 차오르므로 반복 입력은 무시한다
        if (event.repeat) break;
        this.game.swingPress();
        break;
      case 'r':
        this.game.resetBall();
        break;
      case 'm':
        this.hooks.onToggleMute?.();
        break;
      case 'v':
        this.hooks.onToggleView?.();
        break;
      case 'h':
      case '?':
        this.hooks.onToggleHelp?.();
        break;
      default:
        break;
    }
  };

  /** 스페이스/엔터에서 손을 떼면 그 지점의 파워가 확정된다 */
  private handleKeyUp = (event: KeyboardEvent): void => {
    if (event.key !== ' ' && event.key.toLowerCase() !== 'enter') return;
    if (this.hooks.isActive && !this.hooks.isActive()) return;
    this.game.swingRelease();
  };

  /** 창 포커스를 잃으면 누르고 있던 스윙은 무효 처리 */
  private handleBlur = (): void => {
    this.game.swingCancel();
  };

  dispose(): void {
    this.element.removeEventListener('pointerdown', this.handleDown);
    this.element.removeEventListener('pointermove', this.handleMove);
    this.element.removeEventListener('pointerup', this.handleUp);
    this.element.removeEventListener('pointercancel', this.handleCancel);
    window.removeEventListener('keydown', this.handleKey);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('blur', this.handleBlur);
  }
}
