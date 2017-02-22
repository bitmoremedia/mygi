import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/examples');
}

configure(loadStories, module);
