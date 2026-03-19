import { onDimensionChange, onPageLoad, selector } from './View/index.js';

selector.addEventListener('change', onDimensionChange);
document.addEventListener('DOMContentLoaded', onPageLoad);
