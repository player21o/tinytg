export type LaunchParameters = {
  tgWebAppData: InitData;
  tgWebAppVersion: string;
  tgWebAppPlatform: "android" | "ios" | "macos" | "tdesktop" | "weba" | "web";
  tgWebAppThemeParams: ThemeParameters;
};

export type ThemeParameters = {
  accent_text_color: string;
  bg_color: string;
  button_color: string;
  button_text_color: string;
  destructive_text_color: string;
  header_bg_color: string;
  hint_color: string;
  link_color: string;
  secondary_bg_color: string;
  section_bg_color: string;
  section_header_text_color: string;
  subtitle_text_color: string;
  text_color: string;
};

export type User = {
  allows_write_to_pm: boolean;
  first_name: string;
  id: number;
  language_code: string;
  last_name: string;
  photo_url: string;
  username: string;
};

export type InitData = {
  auth_date: string;
  hash: string;
  query_id: string;
  signature: string;
  user: User;
};

//export type Events = { theme_changed: { theme_params: ThemeParameters } };

export type InvoiceStatus =
  | "paid"
  | "failed"
  | "pending"
  | "cancelled"
  | string;

export type PhoneRequestedStatus = "sent" | "cancelled" | string;

export type EmojiStatusAccessRequestedStatus = "allowed" | string;

export type EmojiStatusFailedError =
  | "SUGGESTED_EMOJI_INVALID"
  | "USER_DECLINED"
  | string;

export type WriteAccessRequestedStatus = "allowed" | string;

export type BiometryType = "finger" | "face" | string;

export type BiometryTokenUpdateStatus =
  | "updated"
  | "removed"
  | "failed"
  | string;

export type BiometryAuthRequestStatus = "failed" | "authorized" | string;

export type FullScreenErrorStatus =
  | "ALREADY_FULLSCREEN"
  | "UNSUPPORTED"
  | string;

export interface SafeAreaInsets {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export type HomeScreenStatus =
  | "unsupported"
  | "unknown"
  | "added"
  | "missed"
  | string;

type WithReqId<T = {}> = T & {
  /**
   * Unique request identifier.
   */
  req_id: string;
};

export type Maybe<T> = T | undefined | null;

export type RGB = `#${string}`;

/**
 * Map where key is known event name, and value is its listener.
 * @see https://docs.telegram-mini-apps.com/platform/events
 */
export type Events = {
  /**
   * Accelerometer data changed.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#accelerometer-changed
   */
  accelerometer_changed: {
    /**
     * The current acceleration in the X-axis, measured in m/s².
     */
    x: number;
    /**
     * The current acceleration in the Y-axis, measured in m/s².
     */
    y: number;
    /**
     * The current acceleration in the Z-axis, measured in m/s².
     */
    z: number;
  };
  /**
   * Failed to start accelerometer data tracking.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#accelerometer-failed
   */
  accelerometer_failed: {
    /**
     * Occurred error.
     */
    error: string;
  };
  /**
   * Accelerometer data tracking started.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#accelerometer-started
   */
  accelerometer_started: never;
  /**
   * Accelerometer data tracking stopped.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#accelerometer-stopped
   */
  accelerometer_stopped: never;
  /**
   * User clicked the BackButton.
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/events#back-button-pressed
   */
  back_button_pressed: never;
  /**
   * Biometry authentication request completed.
   * @since 7.2
   * @see https://docs.telegram-mini-apps.com/platform/events#biometry-auth-requested
   */
  biometry_auth_requested: {
    /**
     * Authentication status.
     */
    status: BiometryAuthRequestStatus;
    /**
     * Token from the local secure storage saved previously.
     */
    token?: string;
  };
  /**
   * Biometry settings were received.
   * @since 7.2
   * @see https://docs.telegram-mini-apps.com/platform/events#biometry-info-received
   */
  biometry_info_received:
    | {
        /**
         * If true, indicates that biometric authentication is available on the
         * current device.
         */
        available: false;
      }
    | {
        /**
         * If true, indicates that biometric authentication is available on the
         * current device.
         */
        available: true;
        /**
         * Indicates whether the app has previously requested permission to use
         * biometrics.
         */
        access_requested: boolean;
        /**
         * Indicates whether the user has granted the app permission to use
         * biometrics.
         *
         * If false and access_requested is true may indicate that:
         *
         * - The user has simply canceled the permission popup, in which case
         * a `web_app_biometry_request_access` event can be emitted to re-open the
         * popup.
         *
         * - The user has denied the app permission to use biometrics, in which
         * case the app should open a prompt notifying the user that the biometric
         * settings must be changed to use biometrics.
         */
        access_granted: boolean;
        /**
         * A unique device identifier that can be used to match the token to the
         * device.
         */
        device_id: string;
        /**
         * Show whether a token was safely stored on-device.
         */
        token_saved: boolean;
        /**
         * The type of biometrics currently available on the device.
         */
        type: BiometryType;
      };
  /**
   * Biometry token was updated.
   * @since 7.2
   * @see https://docs.telegram-mini-apps.com/platform/events#biometry-token-updated
   */
  biometry_token_updated: {
    /**
     * Update status.
     *
     * One of:
     * - `updated` - If the token was successfully updated.
     * - `removed` - If the token was successfully removed.
     * - `failed` - If biometric authentication failed, or the app doesn't have
     * permission to use biometrics.
     */
    status: BiometryTokenUpdateStatus;
  };
  /**
   * Telegram application attempted to extract text from clipboard.
   * @since v6.4
   * @see https://docs.telegram-mini-apps.com/platform/events#clipboard-text-received
   */
  clipboard_text_received: WithReqId<{
    /**
     * Data extracted from the clipboard. The returned value will have the type
     * `string` only in the case, application has access to the clipboard.
     */
    data?: string | null;
  }>;
  /**
   * Occurs when the safe area for content changes
   * (e.g., due to orientation change or screen adjustments).
   * @since Mini Apps v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#content_safe_area_changed
   * */
  content_safe_area_changed: SafeAreaInsets;
  /**
   * Custom method invocation completed.
   * @since v6.9
   * @see https://docs.telegram-mini-apps.com/platform/events#custom-method-invoked
   */
  custom_method_invoked: WithReqId<{
    /**
     * Method invocation successful result.
     */
    result?: unknown;
    /**
     * Method invocation error code.
     */
    error?: string;
  }>;
  /**
   * Device orientation data changed.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-orientation-changed
   */
  device_orientation_changed: {
    /**
     * A boolean that indicates whether the device is providing orientation data in
     * absolute values.
     */
    absolute?: Maybe<boolean>;
    /**
     * The rotation around the Z-axis, measured in radians.
     */
    alpha: number;
    /**
     * The rotation around the X-axis, measured in radians.
     */
    beta: number;
    /**
     * The rotation around the Y-axis, measured in radians.
     */
    gamma: number;
  };
  /**
   * Device orientation data tracking failed to start.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-orientation-failed
   */
  device_orientation_failed: {
    /**
     * Occurred error.
     */
    error: string;
  };
  /**
   * Device orientation data tracking started.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-orientation-started
   */
  device_orientation_started: never;
  /**
   * Device orientation data tracking stopped.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-orientation-stopped
   */
  device_orientation_stopped: never;
  /**
   * Device's local storage was cleared.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-storage-cleared
   */
  device_storage_cleared: WithReqId;
  /**
   * An error occurred while working with the device's local storage.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-storage-failed
   */
  device_storage_failed: WithReqId<{
    /**
     * An occurred error.
     */
    error?: string;
  }>;
  /**
   * A value from the device's local storage was retrieved.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-storage-key-received
   */
  device_storage_key_received: WithReqId<{
    /**
     * A retrieved value.
     */
    value: string | null;
  }>;
  /**
   * A value in the device's local storage was saved.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#device-storage-key-saved
   */
  device_storage_key_saved: WithReqId;
  /**
   * Request to set custom emoji status was requested.
   * @see https://docs.telegram-mini-apps.com/platform/events#emoji-status-access-requested
   * @since v8.0
   */
  emoji_status_access_requested: {
    /**
     * Request status.
     */
    status: EmojiStatusAccessRequestedStatus;
  };
  /**
   * Failed to set custom emoji status.
   * @see https://docs.telegram-mini-apps.com/platform/events#emoji-status-failed
   * @since v8.0
   */
  emoji_status_failed: {
    error: EmojiStatusFailedError;
  };
  /**
   * Custom emoji status set.
   * @see https://docs.telegram-mini-apps.com/platform/events#emoji-status-set
   * @since v8.0
   */
  emoji_status_set: never;
  /**
   * Application received file download request status.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#file-download-requested
   */
  file_download_requested: {
    status?: Maybe<"downloading" | string>;
  };
  /**
   * App entered or exited fullscreen mode.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#fullscreen-changed
   */
  fullscreen_changed: {
    /**
     * Is application currently in the fullscreen mode.
     */
    is_fullscreen: boolean;
  };
  /**
   * App failed to expand to the fullscreen mode.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#fullscreen-changed
   */
  fullscreen_failed: {
    /**
     * Full Screen mode status error.
     */
    error: FullScreenErrorStatus;
  };
  /**
   * Gyroscope data changed.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#gyroscope-changed
   */
  gyroscope_changed: {
    /**
     * The current rotation rate around the X-axis, measured in rad/s.
     */
    x: number;
    /**
     * The current rotation rate around the Y-axis, measured in rad/s.
     */
    y: number;
    /**
     * The current rotation rate around the Z-axis, measured in rad/s.
     */
    z: number;
  };
  /**
   * Gyroscope data tracking failed to run.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#gyroscope-failed
   */
  gyroscope_failed: {
    /**
     * Occurred error.
     */
    error: string;
  };
  /**
   * Gyroscope data tracking started.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#gyroscope-started
   */
  gyroscope_started: never;
  /**
   * Gyroscope data tracking stopped.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#gyroscope-stopped
   */
  gyroscope_stopped: never;
  /**
   * The mini application was added to the device's home screen.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#home_screen_added
   */
  home_screen_added: never;
  /**
   * The status of the mini application being added to the home screen has been checked.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#home_screen_checked
   */
  home_screen_checked: {
    /**
     * The status of the mini application being added to the home screen.
     *
     * Possible values:
     * - `unsupported` – the feature is not supported, and it is not possible to add the icon to
     * the home screen,
     * - `unknown` – the feature is supported, and the icon can be added, but it is not possible to
     *   determine if the icon has already been added,
     * - `added` – the icon has already been added to the home screen,
     * - `missed` – the icon has not been added to the home screen.
     */
    status?: HomeScreenStatus;
  };
  /**
   * User declined the request to add the current mini application to the device's home screen.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#home_screen_failed
   */
  home_screen_failed: never;
  /**
   * An invoice was closed.
   * @see https://docs.telegram-mini-apps.com/platform/events#invoice-closed
   */
  invoice_closed: {
    /**
     * Passed during the `web_app_open_invoice` method invocation `slug` value.
     */
    slug: string;
    /**
     * Invoice status.
     */
    status: InvoiceStatus;
  };
  /**
   * Checks the location-related functionality availability state.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#location-checked
   */
  location_checked:
    | { available: false }
    | {
        available: true;
        access_requested?: Maybe<boolean>;
        access_granted?: Maybe<boolean>;
      };
  /**
   * Location-related functionality availability status was retrieved.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#location-requested
   */
  location_requested:
    | { available: false }
    | {
        available: true;
        /**
         * Latitude in degrees.
         */
        latitude: number;
        /**
         * Longitude in degrees.
         */
        longitude: number;
        /**
         * Altitude above sea level in meters.
         */
        altitude?: Maybe<number>;
        /**
         * The direction the device is moving in degrees.
         */
        course?: Maybe<number>;
        /**
         * The speed of the device in m/s.
         */
        speed?: Maybe<number>;
        /**
         * Accuracy of the latitude and longitude values in meters.
         */
        horizontal_accuracy?: Maybe<number>;
        /**
         * Accuracy of the altitude value in meters.
         */
        vertical_accuracy?: Maybe<number>;
        /**
         * Accuracy of the course value in degrees.
         */
        course_accuracy?: Maybe<number>;
        /**
         * Accuracy of the speed value in m/s.
         */
        speed_accuracy?: Maybe<number>;
      };
  /**
   * A user clicked the Main Button.
   * @see https://docs.telegram-mini-apps.com/platform/events#main-button-pressed
   */
  main_button_pressed: never;
  /**
   * Application received phone access request status.
   * @since v6.9
   * @see https://docs.telegram-mini-apps.com/platform/events#phone-requested
   */
  phone_requested: {
    /**
     * Request status.
     */
    status: PhoneRequestedStatus;
  };
  /**
   * Popup was closed.
   * @see https://docs.telegram-mini-apps.com/platform/events#popup-closed
   */
  popup_closed: {
    /**
     * Identifier of the clicked button. In case, the popup was closed without
     * clicking any button, this property will be omitted.
     */
    button_id?: string;
  };
  /**
   * Failed to send a prepared message.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#prepare-message-failed
   */
  prepared_message_failed: {
    /**
     * Occurred error.
     */
    error: string;
  };
  /**
   * A prepared message was sent.
   * @since 8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#prepare-message-sent
   */
  prepared_message_sent: never;
  /**
   * The QR scanner scanned some QR and extracted its content.
   * @param payload - event payload.
   * @since v6.4
   * @see https://docs.telegram-mini-apps.com/platform/events#qr-text-received
   */
  qr_text_received: {
    /**
     * Data extracted from the QR.
     */
    data: string;
  };
  /**
   * Parent iframe requested current iframe reload.
   * @see https://docs.telegram-mini-apps.com/platform/events#reload-iframe
   */
  reload_iframe: never;
  /**
   * Occurs whenever the device's safe area insets change
   * (e.g., due to orientation change or screen adjustments).
   * @since Mini Apps v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#safe_area_changed
   * */
  safe_area_changed: SafeAreaInsets;
  /**
   * QR scanner was closed.
   * @since v6.4
   * @see https://docs.telegram-mini-apps.com/platform/events#scan-qr-popup-closed
   */
  scan_qr_popup_closed: never;
  /**
   * User clicked the secondary button.
   * @since v7.10
   * @see https://docs.telegram-mini-apps.com/platform/events#secondary-button-pressed
   */
  secondary_button_pressed: never;
  /**
   * Device's secure storage was cleared.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#secure-storage-cleared
   */
  secure_storage_cleared: WithReqId;
  /**
   * An error occurred while working with the device's secure storage.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#secure-storage-failed
   */
  secure_storage_failed: WithReqId<{
    /**
     * An occurred error.
     */
    error?: string;
  }>;
  /**
   * A value from the device's secure storage was retrieved.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#secure-storage-key-received
   */
  secure_storage_key_received: WithReqId<{
    /**
     * A retrieved value.
     */
    value: string | null;
    /**
     * True if this value can be restored.
     */
    can_restore?: boolean;
  }>;
  /**
   * A value from the device's secure storage was restored.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#secure-storage-key-restored
   */
  secure_storage_key_restored: WithReqId<{
    /**
     * A restored value.
     */
    value: string | null;
  }>;
  /**
   * A value in the device's secure storage was saved.
   * @since v9.0
   * @see https://docs.telegram-mini-apps.com/platform/events#secure-storage-key-saved
   */
  secure_storage_key_saved: WithReqId;
  /**
   * The event which is usually sent by the Telegram web application. Its
   * payload represents
   * `<style/>` tag html content, a developer could use. The stylesheet
   * described in the payload will help the developer to stylize the app
   * scrollbar (but he is still able to do it himself).
   * @see https://docs.telegram-mini-apps.com/platform/events#set-custom-style
   */
  set_custom_style: string;
  /**
   * Occurs when the Settings Button was pressed.
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/events#settings-button-pressed
   */
  settings_button_pressed: never;
  /**
   * Occurs whenever theme settings are changed in the user's Telegram app
   * (including switching to night mode).
   * @see https://docs.telegram-mini-apps.com/platform/events#theme-changed
   */
  theme_changed: {
    /**
     * Map where the key is a theme stylesheet key and value is the
     * corresponding color in
     * `#RRGGBB` format.
     */
    theme_params: {
      /**
       * @since v6.10
       */
      accent_text_color?: RGB;
      /**
       * @since 7.10
       */
      bottom_bar_bg_color?: RGB;
      bg_color?: RGB;
      button_color?: RGB;
      button_text_color?: RGB;
      /**
       * @since v6.10
       */
      destructive_text_color?: RGB;
      /**
       * @since v6.10
       */
      header_bg_color?: RGB;
      hint_color?: RGB;
      link_color?: RGB;
      secondary_bg_color?: RGB;
      /**
       * @since v6.10
       */
      section_bg_color?: RGB;
      /**
       * @since v6.10
       */
      section_header_text_color?: RGB;
      /**
       * @since v6.10
       */
      subtitle_text_color?: RGB;
      text_color?: RGB;
      // Future unknown palette keys.
      [key: string]: RGB | undefined;
    };
  };
  /**
   * Occurs whenever the viewport has been changed. For example, when the user
   * started dragging the application or called the expansion method.
   * @see https://docs.telegram-mini-apps.com/platform/events#viewport-changed
   */
  viewport_changed: {
    /**
     * The viewport height.
     */
    height: number;
    /**
     * The viewport width.
     */
    width: number;
    /**
     * Is the viewport currently expanded.
     */
    is_expanded: boolean;
    /**
     * Is the viewport current state stable and not going to change in the next
     * moment.
     */
    is_state_stable: boolean;
  };
  /**
   * Occurs whenever the mini app becomes active or inactive.
   *
   * Active state assumes that the native Telegram client is currently working with the
   * current mini application. It is important to note that this is not related to the
   * mini application’s visibility, but rather its selection among other currently opened
   * mini applications.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/events#visibility_changed
   */
  visibility_changed: {
    /**
     * Indicates if the application is currently active.
     */
    is_visible: boolean;
  };
  /**
   * Application received write access request status.
   * @since v6.9
   * @see https://docs.telegram-mini-apps.com/platform/events#write-access-requested
   */
  write_access_requested: {
    /**
     * Request status.
     */
    status: WriteAccessRequestedStatus;
  };
};

interface ButtonParams {
  /**
   * Should the button shine.
   * @since 7.10
   */
  has_shine_effect?: boolean;
  /**
   * Should the button be displayed.
   */
  is_visible?: boolean;
  /**
   * Should the button be enabled.
   */
  is_active?: boolean;
  /**
   * Should loader inside the button be displayed. Use this property in case, some
   * operation takes time. This loader will make user notified about it.
   */
  is_progress_visible?: boolean;
  /**
   * Text inside the button.
   */
  text?: string;
  /**
   * The button background color in `#RRGGBB` format.
   */
  color?: RGB;
  /**
   * The Main Button text color in `#RRGGBB` format.
   */
  text_color?: RGB;
}

/**
 * Describes a list of events and their parameters that could be posted.
 * @see https://docs.telegram-mini-apps.com/platform/methods
 */
export interface Methods {
  /**
   * Notifies parent iframe about the current frame is ready. This method is only used in the Web
   * version of Telegram. As a result, Mini App will receive `set_custom_style` event.
   * @see https://docs.telegram-mini-apps.com/platform/methods#iframe-ready
   */
  iframe_ready: CreateMethodParams<
    | {
        /**
         * True, if the current Mini App supports native reloading.
         */
        reload_supported?: boolean;
      }
    | undefined
  >;
  /**
   * Notifies parent iframe about the current iframe is going to reload.
   * @see https://docs.telegram-mini-apps.com/platform/methods#iframe-will-reload
   */
  iframe_will_reload: CreateMethodParams;
  /**
   * Prompts the user to add the Mini App to the home screen. Note that if the device cannot
   * determine the installation status, the event may not be received even if the icon has
   * been added.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-add-to-home-screen
   */
  web_app_add_to_home_screen: CreateMethodParams;
  /**
   * Emitted by bot mini apps to ask the client to initialize the biometric authentication manager
   * object for the current bot, emitting a `biometry_info_received` event on completion.
   *
   * This request should just initialize the client-side state, i.e. by checking if biometric
   * authentication is even available or not, it should not ask the user anything.
   * @since v7.2
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-biometry-get-info
   */
  web_app_biometry_get_info: CreateMethodParams;
  /**
   * Opens the biometric access settings for bots. Useful when you need to request biometrics
   * access to users who haven't granted it yet.
   *
   * _Note that this method can be called only in response to user interaction with the Mini
   * App interface (e.g. a click inside the Mini App or on the main button)_.
   * @since v7.2
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-biometry-open-settings
   */
  web_app_biometry_open_settings: CreateMethodParams;
  /**
   * Emitted by bot mini apps to ask the user permission to use biometric authentication,
   * emitting a `biometry_info_received` event on completion.
   *
   * This request should not actually prompt biometric authentication, it should just ask the
   * user permission to use them, and a popup should be shown only if the user hasn't already
   * allowed or denied the usage of biometric authentication for the bot associated with the
   * mini app.
   * @since v7.2
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-biometry-request-access
   */
  web_app_biometry_request_access: CreateMethodParams<{
    /**
     * Reason to request biometry access. Should be at least 1 symbol length, but not
     * more than 128 symbols.
     */
    reason?: string;
  }>;
  /**
   * Attempts to authenticate a user using biometrics and fetch a previously stored
   * secure token, emitting the `biometry_auth_requested` event on completion, containing either
   * an error, or a decrypted biometric token (or an empty string if no token was configured yet).
   *
   * Should only be used if the `token_saved` field of the `biometry_info_received` event object
   * is equal to true.
   *
   * If a user has previously disallowed the bot from using biometric authentication, this
   * request will immediately fail, emitting an appropriate `biometry_auth_requested` event.
   * @since v7.2
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-biometry-request-auth
   */
  web_app_biometry_request_auth: CreateMethodParams<{
    /**
     * Reason to request biometry data. Should be at least 1 symbol length, but not more than
     * 128 symbols.
     */
    reason?: string;
  }>;
  /**
   * Attempts to authenticate using biometrics and store the biometric token
   * securely on a device, emitting a `biometry_token_updated` event on completion.
   *
   * This token will be safely stored by the Telegram client and will be associated with the bot
   * that owns the mini app.
   *
   * If the user has previously disallowed the bot from using biometric authentication, this
   * request will immediately fail, emitting an appropriate biometry_token_updated event.
   * @since v7.2
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-biometry-update-token
   */
  web_app_biometry_update_token: CreateMethodParams<{
    /**
     * Optional string field, containing the reason why the bot is asking to authenticate using
     * biometrics (1-128 chars, used in the prompt).
     */
    reason?: string;
    /**
     * The new token (string, 0-1024 chars), or an empty string to remove it.
     */
    token: string;
  }>;
  /**
   * Sends a request to the native Telegram application to check if the current mini
   * application is added to the device's home screen.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-check-home-screen
   */
  web_app_check_home_screen: CreateMethodParams;
  /**
   * Requests location-related functionality availability state.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-check-location
   */
  web_app_check_location: CreateMethodParams;
  /**
   * Closes Mini App.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-close
   */
  web_app_close: CreateMethodParams<
    | {
        /**
         * Should the client return to the previous activity.
         * @since v7.6
         */
        return_back?: boolean;
      }
    | undefined,
    "return_back"
  >;
  /**
   * Closes a QR scanner. The Telegram application creates `scan_qr_popup_closed` event.
   * @since v6.4
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-close-scan-qr-popup
   */
  web_app_close_scan_qr_popup: CreateMethodParams;
  /**
   * Sends data to the bot. When this method is called, a service message is sent to the bot
   * containing the data of the length up to 4096 bytes. Then, Mini App will be closed.
   *
   * To get more information, take a look at `web_app_data` field in the
   * class [Message](https://core.telegram.org/bots/api#message).
   *
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-data-send
   */
  web_app_data_send: CreateMethodParams<{
    /**
     * Data to send to a bot. Should not have size of more than 4096 bytes.
     */
    data: string;
  }>;
  /**
   * Clears all keys previously stored by the bot in the device's local storage.
   * @since 9.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-device-storage-clear
   */
  web_app_device_storage_clear: CreateMethodParams<WithReqId>;
  /**
   * Receives a value from the device's local storage using the specified key.
   * @since 9.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-device-storage-get-key
   */
  web_app_device_storage_get_key: CreateMethodParams<
    WithReqId<{
      /**
       * A key name to retrieve.
       */
      key: string;
    }>
  >;
  /**
   * Stores a value in the device's local storage using the specified key.
   * @since 9.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-device-storage-save-key
   */
  web_app_device_storage_save_key: CreateMethodParams<
    WithReqId<{
      /**
       * A key to use to store the value.
       */
      key: string;
      /**
       * A value to store for the specified key. Passing `null` will lead to the key removal.
       */
      value: string | null;
    }>
  >;
  /**
   * Exits fullscreen mode for miniapp.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-exit-fullscreen
   */
  web_app_exit_fullscreen: CreateMethodParams;
  /**
   * Expands the Mini App.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-expand
   */
  web_app_expand: CreateMethodParams;
  /**
   * Hides the on-screen keyboard, if it is currently visible. Does nothing if the keyboard is
   * not active.
   * @since v9.1
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-hide-keyboard
   */
  web_app_hide_keyboard: CreateMethodParams;
  /**
   * Invokes custom method.
   * @since v6.9
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-invoke-custom-method
   */
  web_app_invoke_custom_method: CreateMethodParams<AnyInvokeCustomMethodParams>;
  /**
   * Opens an invoice by its specified slug. More information about invoices in
   * this [documentation](https://core.telegram.org/bots/payments).
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-open-invoice
   */
  web_app_open_invoice: CreateMethodParams<{
    /**
     * Invoice unique identifier.
     */
    slug: string;
  }>;
  /**
   * Opens a link in a default browser. The Mini App will not be closed.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-open-link
   */
  web_app_open_link: CreateMethodParams<
    {
      /**
       * URL to be opened by Telegram application. Should be a full path with `https` protocol.
       */
      url: string;
      /**
       * Link will be opened in Instant View mode if possible.
       * @since v6.4
       * @see https://instantview.telegram.org/
       */
      try_instant_view?: boolean;
      /**
       * A preferred browser to open the link in.
       * @since v7.6
       */
      try_browser?: OpenLinkBrowser;
    },
    "try_instant_view" | "try_browser"
  >;
  /**
   * Opens the location access settings for bots. Useful when you need to request location access
   * from users who haven't granted it yet.
   *
   * Note that this method can be called only in response to user interaction with the Mini App
   * interface (e.g., a click inside the Mini App or on the main button).
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-open-location-settings
   */
  web_app_open_location_settings: CreateMethodParams;
  /**
   * Opens a new popup. When a user closes the popup, Telegram creates the `popup_closed` event.
   * @since v6.2
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-open-popup
   */
  web_app_open_popup: CreateMethodParams<PopupParams>;
  /**
   * Opens a QR scanner. When the scanner was closed, the Telegram application creates
   * the `scan_qr_popup_closed` event. When the scanner reads QR, Telegram creates the
   * `qr_text_received` event.
   * @since v6.4
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-open-scan-qr-popup
   */
  web_app_open_scan_qr_popup: CreateMethodParams<{
    /**
     * Text to be displayed in the QR scanner.
     */
    text?: string;
  }>;
  /**
   * Opens the Telegram link by its pathname and query parameters. The link will be opened in the
   * Telegram app, Mini App will be closed.
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-open-tg-link
   */
  web_app_open_tg_link: CreateMethodParams<{
    /**
     * Should be a value taken from the link of this format: `https://t.me/{path_full}`. Can
     * additionally contain query parameters.
     */
    path_full: string;
  }>;
  /**
   * Reads text from the clipboard. The method accepts a request identifier which is used to
   * appropriately retrieve the method execution result from the `clipboard_text_received` event.
   * @since v6.4
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-read-text-from-clipboard
   */
  web_app_read_text_from_clipboard: CreateMethodParams<WithReqId>;
  /**
   * Notifies Telegram about current application is ready to be shown. This method will make
   * Telegram to remove application loader and display Mini App.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-ready
   */
  web_app_ready: CreateMethodParams;
  /**
   * Requests content safe area of the user's phone.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-content-safe-area
   */
  web_app_request_content_safe_area: CreateMethodParams;
  /**
   * Shows a native popup requesting permission for the bot to manage user's emoji status.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-emoji-status-access
   */
  web_app_request_emoji_status_access: CreateMethodParams;
  /**
   * Displays a native popup prompting the user to download a file.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-file-download
   */
  web_app_request_file_download: CreateMethodParams<{
    /**
     * The HTTPS URL of the file to be downloaded.
     */
    url: string;
    /**
     * The suggested name for the downloaded file.
     */
    file_name: string;
  }>;
  /**
   * Requests to open the mini app in fullscreen.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-fullscreen
   */
  web_app_request_fullscreen: CreateMethodParams;
  /**
   * Requests location data.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-location
   */
  web_app_request_location: CreateMethodParams;
  /**
   * Requests access to current user's phone.
   * @since v6.9
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-phone
   */
  web_app_request_phone: CreateMethodParams;
  /**
   * Requests safe area of the user's phone.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-safe-area
   */
  web_app_request_safe_area: CreateMethodParams;
  /**
   * Requests current theme from Telegram. As a result, Telegram will create `theme_changed` event.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-theme
   */
  web_app_request_theme: CreateMethodParams;
  /**
   * Requests current viewport information from Telegram. As a result, Telegram will create
   * `viewport_changed` event.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-request-viewport
   */
  web_app_request_viewport: CreateMethodParams;
  /**
   * Requests write message access to the current user.
   * @since v6.9
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-rqeuest-write-access
   */
  web_app_request_write_access: CreateMethodParams;
  /**
   * Clears all keys previously stored by the bot in the device's secure storage.
   * @since 9.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-secure-storage-clear
   */
  web_app_secure_storage_clear: CreateMethodParams<WithReqId>;
  /**
   * Receives a value from the device's secure storage using the specified key.
   * @since 9.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-secure-storage-get-key
   */
  web_app_secure_storage_get_key: CreateMethodParams<
    WithReqId<{
      /**
       * A key to use to store the value.
       */
      key: string;
    }>
  >;
  /**
   * Attempts to restore a key that previously existed on the current device. When called, the user
   * will be asked for permission to restore the value.
   * @since 9.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-secure-storage-restore-key
   */
  web_app_secure_storage_restore_key: CreateMethodParams<
    WithReqId<{
      /**
       * A key to use to restore the value.
       */
      key: string;
    }>
  >;
  /**
   * Stores a value in the device's secure storage using the specified key.
   * @since 9.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-secure-storage-save-key
   */
  web_app_secure_storage_save_key: CreateMethodParams<
    WithReqId<{
      /**
       * A key to use to store the value.
       */
      key: string;
      /**
       * A value to store for the specified key. Passing `null` will lead to the key removal.
       */
      value: string | null;
    }>
  >;
  /**
   * Opens a dialog allowing the user to share a message provided by the bot.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-send-prepared-message
   */
  web_app_send_prepared_message: CreateMethodParams<{
    /**
     * Identifier of the message
     * ([PreparedInlineMessage](https://core.telegram.org/bots/api#preparedinlinemessage))
     * previously obtained via the Bot API method
     * [savePreparedInlineMessage](https://core.telegram.org/bots/api#savepreparedinlinemessage).
     */
    id: string;
  }>;
  /**
   * Updates the Mini App background color.
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-set-background-color
   */
  web_app_set_background_color: CreateMethodParams<{
    /**
     * Color to set.
     */
    color: RGB;
  }>;
  /**
   * Updates the mini app bottom bar background color.
   * @since v7.10
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-set-bottom-bar-color
   */
  web_app_set_bottom_bar_color: CreateMethodParams<{
    /**
     * Color to set.
     */
    color: RGB;
  }>;
  /**
   * Opens a dialog allowing the user to set the specified custom emoji as their status.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-set-emoji-status
   */
  web_app_set_emoji_status: CreateMethodParams<{
    /**
     * Custom emoji identifier to set.
     */
    custom_emoji_id: string;
    /**
     * The status expiration time in seconds.
     */
    duration?: number;
  }>;
  /**
   * Updates the Mini App header color.
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-set-header-color
   */
  web_app_set_header_color: CreateMethodParams<
    | {
        /**
         * The Mini App header color key.
         */
        color_key: "bg_color" | "secondary_bg_color";
      }
    | {
        /**
         * Color in RGB format.
         * @since v6.9
         */
        color: RGB;
      },
    "color"
  >;
  /**
   * Updates the Back Button settings.
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-setup-back-button
   */
  web_app_setup_back_button: CreateMethodParams<{
    /**
     * Should the Back Button be visible.
     */
    is_visible: boolean;
  }>;
  /**
   * Updates current closing behavior.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-setup-closing-behavior
   */
  web_app_setup_closing_behavior: CreateMethodParams<{
    /**
     * Will user be prompted in case, an application is going to be closed.
     */
    need_confirmation: boolean;
  }>;

  /**
   * Updates the Main Button settings.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-setup-main-button
   */
  web_app_setup_main_button: CreateMethodParams<
    ButtonParams,
    "has_shine_effect"
  >;

  /**
   * Updates the secondary button settings.
   * @since v7.10
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-setup-secondary-button
   */
  web_app_setup_secondary_button: CreateMethodParams<
    ButtonParams & {
      /**
       * Position of the secondary button. It applies only if both the main and secondary buttons
       * are visible.
       *
       * Supported values:
       * - `left`, displayed to the left of the main button.
       * - `right`, displayed to the right of the main button.
       * - `top`, displayed above the main button.
       * - `bottom`, displayed below the main button.
       */
      position?: "left" | "right" | "top" | "bottom";
    }
  >;

  /**
   * Updates the current state of the Settings Button.
   * @since v6.10
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-setup-settings-button
   */
  web_app_setup_settings_button: CreateMethodParams<{
    /**
     * Should the Settings Button be displayed.
     */
    is_visible: boolean;
  }>;
  /**
   * Changes swipe behavior.
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-setup-swipe-behavior
   * @since v7.7
   */
  web_app_setup_swipe_behavior: CreateMethodParams<{
    allow_vertical_swipe: boolean;
  }>;

  /**
   * A method that opens the native story editor.
   * @since v7.8
   */
  web_app_share_to_story: CreateMethodParams<{
    /**
     * A media URL which will be used as a background for a created story.
     */
    media_url: string;
    /**
     * The caption to be added to the media.
     * 0-200 characters for regular users and 0-2048 characters for premium subscribers.
     * @see https://telegram.org/faq_premium#telegram-premium
     */
    text?: string;
    /**
     * An object that describes a widget link to be included in the story.
     * Note that only premium subscribers can post stories with links.
     * @see https://telegram.org/faq_premium#telegram-premium
     */
    widget_link?: {
      /**
       * The URL to be included in the story.
       */
      url: string;
      /**
       * The name to be displayed for the widget link, 0-48 characters.
       */
      name?: string;
    };
  }>;
  /**
   * Starts tracking accelerometer data.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-start-accelerometer
   */
  web_app_start_accelerometer: CreateMethodParams<{
    /**
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Note that refresh_rate may not be supported on all platforms, so the actual tracking
     * frequency may differ from the specified value.
     */
    refresh_rate: number;
  }>;
  /**
   * Starts tracking device orientation data.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-start-device-orientation
   */
  web_app_start_device_orientation: CreateMethodParams<{
    /**
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Note that refresh_rate may not be supported on all platforms, so the actual tracking
     * frequency may differ from the specified value.
     */
    refresh_rate: number;
    /**
     * Pass true to receive absolute orientation data, allowing you to determine the device's
     * attitude relative to magnetic north. Use this option if implementing features like a
     * compass in your app. If relative data is sufficient, pass false.
     *
     * Keep in mind that some devices may not support absolute orientation data. In such cases,
     * you will receive relative data even if need_absolute=true is passed.
     */
    need_absolute?: boolean;
  }>;

  /**
   * Starts tracking gyroscope data.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-start-gyroscope
   */
  web_app_start_gyroscope: CreateMethodParams<{
    /**
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Note that refresh_rate may not be supported on all platforms, so the actual tracking
     * frequency may differ from the specified value.
     */
    refresh_rate: number;
  }>;
  /**
   * Stops tracking accelerometer data.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-stop-accelerometer
   */
  web_app_stop_accelerometer: CreateMethodParams;
  /**
   * Stops tracking device orientation data.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-stop-device-orientation
   */
  web_app_stop_device_orientation: CreateMethodParams;

  /**
   * Stops tracking gyroscope data.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-stop-gyroscope
   */
  web_app_stop_gyroscope: CreateMethodParams;
  /**
   * Inserts the bot's username and the specified inline query in the current chat's input field.
   * Query may be empty, in which case only the bot's username will be inserted. The client prompts
   * the user to choose a specific chat, then opens that chat and inserts the bot's username and
   * the specified inline query in the input field.
   * @since v6.7
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-switch-inline-query
   */
  web_app_switch_inline_query: CreateMethodParams<{
    /**
     * Text which should be inserted in the input after the current bot name. Max length is
     * 256 symbols.
     */
    query: string;
    /**
     * List of chat types which could be chosen to send the message. Could be empty list.
     */
    chat_types: ("users" | "bots" | "groups" | "channels")[];
  }>;
  /**
   * Locks the Mini App’s orientation to its current mode (either portrait or landscape). Once
   * locked, the orientation remains fixed, regardless of device rotation. This is useful if a
   * stable orientation is needed during specific interactions.
   * @since v8.0
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-toggle-orientation-lock
   */
  web_app_toggle_orientation_lock: CreateMethodParams<{ locked: boolean }>;
  /**
   * Generates haptic feedback event.
   * @since v6.1
   * @see https://docs.telegram-mini-apps.com/platform/methods#web-app-trigger-haptic-feedback
   */
  web_app_trigger_haptic_feedback: CreateMethodParams<AnyHapticFeedbackParams>;
}

type UnionKeys<T> = T extends T ? keyof T : never;

export interface CreateMethodParams<
  Params = never,
  VersionedParam extends UnionKeys<Params> = never
> {
  params: Params;
  versionedParams: VersionedParam;
}

interface CreateInvokeCustomMethodParams<
  M extends string,
  Params extends object
> {
  /**
   * Unique request identifier.
   */
  req_id: string;
  /**
   * Method name.
   */
  method: M;
  /**
   * Method specific parameters.
   */
  params: Params;
}

export interface CustomMethodsParams {
  /**
   * Deletes storage values using their keys.
   */
  deleteStorageValues: { keys: string | string[] };
  /**
   * Returns the current server time.
   */
  getCurrentTime: {};
  /**
   * Gets the current user contact in case, the mini app has access to it.
   */
  getRequestedContact: {};
  /**
   * Gets all registered storage keys.
   */
  getStorageKeys: {};
  /**
   * Gets storage values using their keys.
   */
  getStorageValues: { keys: string | string[] };
  /**
   * Saves a value using specified key in the storage.
   */
  saveStorageValue: { key: string; value: string };
}

/**
 * Known custom method name.
 */
export type CustomMethodName = keyof CustomMethodsParams;

/**
 * Custom method parameters.
 */
export type CustomMethodParams<M extends CustomMethodName> =
  CustomMethodsParams[M];

export type AnyInvokeCustomMethodParams =
  | CreateInvokeCustomMethodParams<string, any>
  | {
      [M in CustomMethodName]: CreateInvokeCustomMethodParams<
        M,
        CustomMethodParams<M>
      >;
    }[CustomMethodName];

export type OpenLinkBrowser =
  | "google-chrome"
  | "chrome"
  | "mozilla-firefox"
  | "firefox"
  | "microsoft-edge"
  | "edge"
  | "opera"
  | "opera-mini"
  | "brave"
  | "brave-browser"
  | "duckduckgo"
  | "duckduckgo-browser"
  | "samsung"
  | "samsung-browser"
  | "vivaldi"
  | "vivaldi-browser"
  | "kiwi"
  | "kiwi-browser"
  | "uc"
  | "uc-browser"
  | "tor"
  | "tor-browser";

export interface PopupParams {
  /**
   * The text to be displayed in the popup title, 0-64 characters.
   */
  title: string;
  /**
   * The message to be displayed in the body of the popup, 1-256 characters.
   */
  message: string;
  /**
   * List of buttons to be displayed in the popup, 1-3 buttons.
   */
  buttons: PopupButton[];
}
/**
 * Describes the native popup button.
 * @see https://docs.telegram-mini-apps.com/platform/methods#popupbutton
 */
export type PopupButton = {
  /**
   * Identifier of the button, 0-64 characters.
   */
  id: string;
} & (
  | {
      /**
       * Type of the button:
       * - `default`, a button with the default style;
       * - `destructive`, a button with a style that indicates a destructive
       * action (e.g. "Remove", "Delete", etc.).
       *
       * @default "default"
       */
      type?: "default" | "destructive";
      /**
       * The text to be displayed on the button, 0-64 characters.
       */
      text: string;
    }
  | {
      /**
       * Type of the button:
       * - `ok`, a button with the localized text "OK";
       * - `close`, a button with the localized text "Close";
       * - `cancel`, a button with the localized text "Cancel".
       */
      type: "ok" | "close" | "cancel";
    }
);

/**
 * Generic type which creates new types of haptic feedback.
 */
type CreateHapticFeedbackParams<T extends string, P> = { type: T } & P;

/**
 * Style of impact occurred haptic event.
 * - `light`, indicates a collision between small or lightweight UI objects,
 * - `medium`, indicates a collision between medium-sized or medium-weight UI objects,
 * - `heavy`, indicates a collision between large or heavyweight UI objects,
 * - `rigid`, indicates a collision between hard or inflexible UI objects,
 * - `soft`, indicates a collision between soft or flexible UI objects.
 */
export type ImpactHapticFeedbackStyle =
  | "light"
  | "medium"
  | "heavy"
  | "rigid"
  | "soft";

/**
 * Type of notification occurred type event.
 * - `error`, indicates that a task or action has failed,
 * - `success`, indicates that a task or action has completed successfully,
 * - `warning`, indicates that a task or action produced a warning.
 */
export type NotificationHapticFeedbackType = "error" | "success" | "warning";

/**
 * `impactOccurred` haptic feedback.
 */
export type ImpactHapticFeedbackParams = CreateHapticFeedbackParams<
  "impact",
  {
    impact_style: ImpactHapticFeedbackStyle;
  }
>;

/**
 * `notificationOccurred` haptic feedback.
 */
export type NotificationHapticFeedbackParams = CreateHapticFeedbackParams<
  "notification",
  {
    notification_type: NotificationHapticFeedbackType;
  }
>;

/**
 * `selectionChanged` haptic feedback.
 */
export type SelectionHapticFeedbackParams = CreateHapticFeedbackParams<
  "selection_change",
  {}
>;

export type AnyHapticFeedbackParams =
  | ImpactHapticFeedbackParams
  | NotificationHapticFeedbackParams
  | SelectionHapticFeedbackParams;
