import {expectType, expectError} from 'tsd';
import { hasScreenCapturePermission, hasPromptedForPermission, openSystemPreferences, resetPermissions } from './index.d';

expectType<boolean>(hasScreenCapturePermission());
expectType<boolean>(hasPromptedForPermission());
expectType<boolean>(resetPermissions());
expectType<boolean>(resetPermissions({bundleId: 'some.bundle.id'}));
expectType<Promise<void>>(openSystemPreferences())

expectError(resetPermissions('some.bundle.id'));
