
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDisableScreenshotsSpec.h"

@interface DisableScreenshots : NSObject <NativeDisableScreenshotsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface DisableScreenshots : NSObject <RCTBridgeModule>
#endif

@end
