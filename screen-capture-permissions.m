#import <Foundation/Foundation.h>
#include <node_api.h>

static napi_value hasPermissions(napi_env env, napi_callback_info info) {
  napi_status status;
  bool hasPermissions;
  napi_value hasPermissionsInt32;
  napi_value ret;

  hasPermissions = CGPreflightScreenCaptureAccess();

  status = napi_create_int32(env, hasPermissions, &hasPermissionsInt32);
  assert(status == napi_ok);
  status = napi_coerce_to_bool(env, hasPermissionsInt32, &ret);
  assert(status == napi_ok);
  return ret;
}

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor hasPermissionsDescriptor = DECLARE_NAPI_METHOD("hasPermissions", hasPermissions);
  status = napi_define_properties(env, exports, 1, &hasPermissionsDescriptor);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)

