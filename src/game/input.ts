import type { Game } from './game';

interface InputHooks {
  onToggleMute?: () => void;
  onToggleHelp?: () => void;
}

/** 캔버스 포인터(마우스/터치)와 키보드를 게임 조작으로 연결한다. */
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
    this.element.setPointerCapture?.(event.pointerId);
    this.game.pointerDown(event.clientX, event.clientY, event.pointerId, event.button);
  };

  private handleMove = (event: PointerEvent): void => {
    this.game.pointerMove(event.clientX, event.clientY, event.pointerId);
  };

  private handleUp = (event: PointerEvent): void => {
    this.game.pointerUp(event.pointerId);
  };

  private handleCancel = (event: PointerEvent): void => {
    this.game.pointerCancel(event.pointerId);
  };

  private handleKey = (event: KeyboardEvent): void => {
    const target = event.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;

    switch (event.key.toLowerCase()) {
      case 'a':
      case 'arrowleft':
        this.game.orbitBy(-55, 0);
        break;
      case 'd':
      case 'arrowright':
        this.game.orbitBy(55, 0);
        break;
      case 'w':
      case 'arrowup':
        this.game.orbitBy(0, -35);
        break;
      case 's':
      case 'arrowdown':
        this.game.orbitBy(0, 35);
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
