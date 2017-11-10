/* @flow */
'use strict'

import { NativeModules, NativeEventEmitter } from 'react-native'
import type EmitterSubscription from 'EmitterSubscription'
import { Platform } from 'react-native';

export type SafeAreaInsets = { top: number, left: number, bottom: number, right: number };

const nativeModule = NativeModules.RNSafeArea
const nativeEventEmitter = new NativeEventEmitter(nativeModule)

class SafeArea {
  getSafeAreaInsetsForRootView(): Promise<{ safeAreaInsets: SafeAreaInsets }> {
    if (Platform.OS === 'ios') {
      // iOS
      return nativeModule.getSafeAreaInsetsForRootView();
    } else {
      // Android
      return Promise.resolve({ safeAreaInsets: { top: 0, left: 0, bottom: 0, right: 0 } });
    }
  }

  addEventListener(eventType: string, listener: Function, context: ?Object): ?EmitterSubscription {
    if (Platform.OS === 'ios') {
      // iOS
      return nativeEventEmitter.addListener(eventType, listener, context);
    } else {
      // Android
      return null;
    }
  }

  removeEventListener(eventType: string, listener: Function): void {
    if (Platform.OS === 'ios') {
      // iOS
      nativeEventEmitter.removeListener(eventType, listener)
    }
  }
}

export default new SafeArea();
