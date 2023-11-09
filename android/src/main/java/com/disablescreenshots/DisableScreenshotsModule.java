package com.disablescreenshots;

import androidx.annotation.NonNull;

import android.view.WindowManager;
import android.view.Window;
import android.view.View;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = DisableScreenshotsModule.NAME)
public class DisableScreenshotsModule extends NativeDisableScreenshotsSpec {
  private ReactApplicationContext reactContext;
  public static final String NAME = "DisableScreenshots";

  public DisableScreenshotsModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @Override
  public void setSecureStatus(boolean flag) {
    reactContext.getCurrentActivity().runOnUiThread(new Runnable() {
    @Override
    public void run() {
      Window window = reactContext
       .getCurrentActivity().getWindow();
       
      if (flag) {
        window.setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
      } else {
        window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
      }
    }
  });
  }
}
