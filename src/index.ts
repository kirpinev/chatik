import './index.styl';

import { router } from './init/router';

import { path } from './modules/constants';

import { navigate } from './modules/utils';

router.start();

navigate(window.location.pathname, router, path);
