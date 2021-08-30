package com.reactlibrary;

import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.scwang.smart.refresh.layout.util.SmartUtil;

public class RCTRefreshHeaderManager extends ViewGroupManager<RCTRefreshHeader> {
    final String CLASS_NAME = "RNRefreshHeader";
    @NonNull
    @Override
    public String getName() {
        return CLASS_NAME;
    }

    @NonNull
    @Override
    protected RCTRefreshHeader createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new RCTRefreshHeader(reactContext);
    }

    @ReactProp(name = "refreshLayoutHeight",defaultInt=0)
    public void setHeight(RCTRefreshHeader view, int refreshLayoutHeight) {
        view.setLayoutParams(new ViewGroup.LayoutParams(0, SmartUtil.dp2px(refreshLayoutHeight)));
    }


}
