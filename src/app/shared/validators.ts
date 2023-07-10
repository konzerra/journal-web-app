import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

export function wordCountValidator(wordsCount: number) {
  return function(control: AbstractControl): ValidationErrors | null {
    const words = control.value ? control.value.split(/\s+/) : [];
    if (words.length < wordsCount) {
      return { 'not_enough_words': { requiredWordsCount: wordsCount, actualWordsCount: words.length } };
    } else {
      return null;
    }
  };
}

export function isNotBlanc(value: string): boolean {
  return value.trim().length > 0;
}

