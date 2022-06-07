import { ExpandableList } from './ExpandableList';

const listElements = document.querySelectorAll('.js-expandable-list');

listElements.forEach((element) => new ExpandableList(element));
