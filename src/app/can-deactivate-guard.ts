import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivater {
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivater> = (component) => {
  return component.canDeactivate();
};
