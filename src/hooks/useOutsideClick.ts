import { useEffect, MutableRefObject } from 'react';

/**
 * Event listeners for outside click.
 *
 * More details:
 * - https://codesandbox.io/s/opmco?file=/src/useClickOutside.js
 * - https://github.com/Andarist/use-onclickoutside/blob/main/src/index.ts
 */
export function useOutSideClick(
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void,
): void {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const clickListener = (event: MouseEvent) => {
      // ignore when `mousedown` and `touchstart` event start outside of the ref element
      if (startedInside || !startedWhenMounted) {
        return;
      }
      // ignore when `click` event happens inside ref element's descendent
      if (!ref?.current || ref?.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    const validateEventStart = (event: MouseEvent | TouchEvent) => {
      startedWhenMounted = ref.current !== null;
      startedInside =
        ref.current !== null && ref.current.contains(event.target as Node);
    };

    document.addEventListener('mousedown', validateEventStart);
    document.addEventListener('touchstart', validateEventStart);
    document.addEventListener('click', clickListener);

    return () => {
      document.removeEventListener('mousedown', validateEventStart);
      document.removeEventListener('touchstart', validateEventStart);
      document.removeEventListener('click', clickListener);
    };
  }, [ref, handler]);
}
