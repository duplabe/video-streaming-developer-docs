(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{"+uG1":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return c}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var n=t("7ljp"),l=t("XbGe");t("qKvR");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var r={},o={_frontmatter:r},b=l.a;function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(n.b)(b,i({},o,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"1.4.0 - 2019-07-22"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We had to change ",Object(n.b)("inlineCode",{parentName:"li"},"support-v4")," to ",Object(n.b)("inlineCode",{parentName:"li"},"androidx")," libraries to solve support lib version collision."),Object(n.b)("li",{parentName:"ul"},"Changed flatdir Maven repository to normal local Maven repository:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"repositories {\n    maven {\n        name 'IBMLocal'\n        url new File(\"${rootProject.rootDir.path}/m2repository\").toURI()\n    }\n}\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Changed module naming to ",Object(n.b)("inlineCode",{parentName:"li"},"*-external"),". For example:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"'tv.ustream.player:ibm-player-sdk-android-external:1.4.0'\n'tv.ustream.player:ibm-player-sdk-android-plugin-ads-external:1.4.0'\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updated external dependency: ExoPlayer to version 2.10.2. Please update your ",Object(n.b)("inlineCode",{parentName:"li"},"build.gradle")," files with:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"    implementation 'com.google.android.exoplayer:exoplayer-core:2.10.2'\n    implementation 'com.google.android.exoplayer:exoplayer-ui:2.10.2'\n    implementation 'com.google.android.exoplayer:exoplayer-hls:2.10.2'\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Changes affecting only Ads Plugin users"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Ads Plugin"),"’s external dependencies updated.\nIf you are using the plugin please update your ",Object(n.b)("inlineCode",{parentName:"li"},"build.gradle")," files with:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"    implementation 'tv.ustream.player:ibm-player-sdk-android-plugin-ads-external:1.4.0'\n    implementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.11.3'\n    implementation 'com.google.android.gms:play-services-ads-identifier:17.0.0'\n    implementation 'androidx.browser:browser:1.0.0'\n")),Object(n.b)("h2",null,"1.3.1 - 2018-05-29"),Object(n.b)("h3",null,"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MediaTrackGroupHolder")," now has a new field called ",Object(n.b)("inlineCode",{parentName:"li"},"formatSupportInfo"),". The ",Object(n.b)("inlineCode",{parentName:"li"},"FormatSupportInfoProvider")," instance\ncan be used to query whether a ",Object(n.b)("inlineCode",{parentName:"li"},"MediaFormat")," is supported or not.\nFormat support information is based on the decoder’s ",Object(n.b)("em",{parentName:"li"},"reported")," capabilities, it is best used for informational purposes only.\nA format that is reported unsupported may play correctly or have issues with playback or not play at all.\nThe player will try to avoid unsupported formats, but will try to play them if no other is available.\nSee javadoc for more info."),Object(n.b)("li",{parentName:"ul"},"New class ",Object(n.b)("inlineCode",{parentName:"li"},"SignatureUtil")," can now be used to generate and check your Key Hash.\nCall ",Object(n.b)("inlineCode",{parentName:"li"},"SignatureUtil.keyHashFromContext(Context)")," in your application.")),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updated external dependency: ExoPlayer to version 2.8.1. Please update your ",Object(n.b)("inlineCode",{parentName:"li"},"build.gradle")," files with:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"    compile 'com.google.android.exoplayer:exoplayer-core:2.8.1'\n    compile 'com.google.android.exoplayer:exoplayer-ui:2.8.1'\n    compile 'com.google.android.exoplayer:exoplayer-hls:2.8.1'\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MediaTrackChangedListener.onMediaTracksChanged")," now also contains unsupported media formats. Media format support\ncan be queried using the new ",Object(n.b)("inlineCode",{parentName:"li"},"FormatSupportInfoProvider")," class."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MediaFormat.mimeType")," is now annotated ",Object(n.b)("inlineCode",{parentName:"li"},"@Nullable"),", it was nullable previously but was not annotated by mistake.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Changes affecting only Ads Plugin users"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Ads Plugin"),"’s external dependencies updated.\nWe had to add an explicit dependency on ",Object(n.b)("inlineCode",{parentName:"li"},"customtabs")," and ",Object(n.b)("inlineCode",{parentName:"li"},"support-v4")," libraries to solve support lib version collision.\nThis happened because ExoPlayer uses different version than Play Services.\nIf you are using the plugin please update your ",Object(n.b)("inlineCode",{parentName:"li"},"build.gradle")," files with:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"    compile 'tv.ustream.player:ibm-player-sdk-android-plugin-ads:1.3.1@aar'\n    compile 'com.google.ads.interactivemedia.v3:interactivemedia:3.8.2'\n    compile 'com.google.android.gms:play-services-ads:15.0.1'\n    compile 'com.android.support:customtabs:27.0.0'\n    compile 'com.android.support:support-v4:27.0.0'\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The above change requires a few excludes to be added to the android packagingOptions in gradle.\nWe put these in a separate gradle file that only needs to be applied. See the sample app for details.\nExample usage:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),'    apply from: "${rootDir}/packaging-opts.gradle" // Apply common packaging options from separate file.\n')),Object(n.b)("h2",null,"1.1.1 - 2018-02-27"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updated external dependency: ExoPlayer to version 2.6.1. Please update your ",Object(n.b)("inlineCode",{parentName:"li"},"build.gradle")," files with:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"    compile 'com.google.android.exoplayer:exoplayer-core:2.6.1'\n    compile 'com.google.android.exoplayer:exoplayer-ui:2.6.1'\n    compile 'com.google.android.exoplayer:exoplayer-hls:2.6.1'\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updated external dependency: JSR-305 library (",Object(n.b)("inlineCode",{parentName:"li"},"com.google.code.findbugs:jsr305"),") to version 3.0.2. Please update your ",Object(n.b)("inlineCode",{parentName:"li"},"build.gradle")," files."),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where calling ",Object(n.b)("inlineCode",{parentName:"li"},"UstreamPlayer.play()")," after ",Object(n.b)("inlineCode",{parentName:"li"},"UstreamPlayer.disconnect()")," on the player while an ad is playing would start\nthe video from the beginning instead of the last known position."),Object(n.b)("li",{parentName:"ul"},"Seeking the player while an ad is playing seeks the original content.")),Object(n.b)("h2",null,"1.1.0 - 2018-02-07"),Object(n.b)("h3",null,"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Plugin support for the SDK, through replaceable ",Object(n.b)("inlineCode",{parentName:"li"},"MediaPlayerModule"),"s for custom player behaviour.\nPlugins will be provided by IBM in separate artifacts."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Ads Plugin")," that enables you to insert your own ads into the content, see the documentation and javadoc for details.\nTo use the plugin put: the ",Object(n.b)("em",{parentName:"li"},"aar")," file in your libs folder and add these lines to your gradle file (Google IMA SDK is a dependency of the Ads Plugin):")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"    compile 'tv.ustream.player:ibm-player-sdk-android-plugin-ads:1.1.0@aar'\n    compile 'com.google.ads.interactivemedia.v3:interactivemedia:3.7.4'\n    compile 'com.google.android.gms:play-services-ads:11.8.0'\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"UstreamPlayer"),"’s ",Object(n.b)("inlineCode",{parentName:"li"},"initWithContent(...)")," can now be provided with a custom ",Object(n.b)("inlineCode",{parentName:"li"},"MediaPlayerModule")," via an optional parameter."),Object(n.b)("li",{parentName:"ul"},"Introduced ",Object(n.b)("inlineCode",{parentName:"li"},"getMediaPlayerPlugin()")," to ",Object(n.b)("inlineCode",{parentName:"li"},"UstreamPlayer")," to query the current ",Object(n.b)("inlineCode",{parentName:"li"},"MediaPlayerModule"),". You will need to cast this instance\nto the actual type that was set in ",Object(n.b)("inlineCode",{parentName:"li"},"initWithContent(ContentDescriptor, MediaPlayerModule)")," before use."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MediaPlayerModule")," interface to encapsulate media player plugins. It’s only method is ",Object(n.b)("inlineCode",{parentName:"li"},"getSupportedPlayerViewType()"),"\nwhich describes the ",Object(n.b)("inlineCode",{parentName:"li"},"PlayerView")," that the plugin is compatible with.")),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Google ExoPlayer’s Core, HLS and UI components are now dependencies of the SDK. Do not forget to add the following lines\nto your build.gradle file:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"    compile 'com.google.android.exoplayer:exoplayer-core:r2.5.1'\n    compile 'com.google.android.exoplayer:exoplayer-ui:r2.5.1'\n    compile 'com.google.android.exoplayer:exoplayer-hls:r2.5.1'\n")),Object(n.b)("h2",null,"1.0.2 - 2017-11-16"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Moved ",Object(n.b)("inlineCode",{parentName:"li"},"ContentDescriptor.java")," and ",Object(n.b)("inlineCode",{parentName:"li"},"ContentType.java")," to package ",Object(n.b)("inlineCode",{parentName:"li"},"tv.ustream.content"),". Please re-import these classes."),Object(n.b)("li",{parentName:"ul"},"Renamed interface ",Object(n.b)("inlineCode",{parentName:"li"},"tv.ustream.player.android.api.UstreamPlayerAndroid")," to ",Object(n.b)("inlineCode",{parentName:"li"},"tv.ustream.player.api.UstreamPlayer"),". Just rename where used, and import."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"UstreamPlayer.setPlayerView(playerView)")," now accepts ",Object(n.b)("inlineCode",{parentName:"li"},"tv.ustream.player.api.PlayerView")," interface.\nHowever ",Object(n.b)("inlineCode",{parentName:"li"},"tv.ustream.player.android.PlayerView")," should still be used in the XML layout. This is just cosmetics, no change is required on your end."),Object(n.b)("li",{parentName:"ul"},"Fixed occasional connection errors when reconnecting after a reject.")),Object(n.b)("h3",null,"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"New callback in ",Object(n.b)("inlineCode",{parentName:"li"},"ErrorListener")," to indicate that the content is GeoLocked and can not be watched in the user’s area.\nThis restriction can be applied on your dashboard to black or white list certain countries. When the ",Object(n.b)("inlineCode",{parentName:"li"},"onGeoLock()")," callback is fired\nnotify your users that they are unable to view this content from their region.")),Object(n.b)("h3",null,"Removed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Deprecated values from ",Object(n.b)("inlineCode",{parentName:"li"},"MetaData.java")," class.")),Object(n.b)("h2",null,"0.10.2 - 2017-10-09"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Jsr305 library is now a requirement. Do not forget to add ",Object(n.b)("inlineCode",{parentName:"li"},"compile 'com.google.code.findbugs:jsr305:3.0.1'")," to your build.gradle file.\nThe sample app already contained this dependency, if you copied those dependencies you should be fine."),Object(n.b)("li",{parentName:"ul"},"The method: ",Object(n.b)("inlineCode",{parentName:"li"},"UstreamPlayerAndroid.setPlayerView(playerView)")," now accepts ",Object(n.b)("inlineCode",{parentName:"li"},"null"),". You can now explicitly remove a previously set ",Object(n.b)("inlineCode",{parentName:"li"},"PlayerView"),"\nfrom the ",Object(n.b)("inlineCode",{parentName:"li"},"ustreamPlayer")," instance, but keep the other listeners. Just like with all other setter methods of the UstreamPlayer\nthe player instance must be detached first, then should be the setter called. The changes will only take effect after calling attach.")),Object(n.b)("h3",null,"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Documentation for pre-buffering content to be played later. A previously buffered content can be played instantaneously when calling ",Object(n.b)("inlineCode",{parentName:"li"},"play()"),".\nNote: This is only applicable for ",Object(n.b)("strong",{parentName:"li"},"RECORDED")," content. See the documentation for more details.")),Object(n.b)("h2",null,"0.9.6 - 2017-08-28"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updated media player"),Object(n.b)("li",{parentName:"ul"},"Faster track switching in general (fewer rebuffers when changing subtitle tracks for example)"),Object(n.b)("li",{parentName:"ul"},"Reduced playback gap on Surface change")),Object(n.b)("h2",null,"0.9.3 - 2017-07-24"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Correctly display CEA-608 type closed caption names. In some previous versions this displayed a generated name instead of the desired one."),Object(n.b)("li",{parentName:"ul"},"When opening a ",Object(n.b)("em",{parentName:"li"},"RECORDED")," content ",Object(n.b)("inlineCode",{parentName:"li"},"ContentNotPlayable")," is no longer reported if the requested content is not available immediately only after our servers prepare the content."),Object(n.b)("li",{parentName:"ul"},"When connected to a ",Object(n.b)("em",{parentName:"li"},"LIVE")," content that is Offline at the moment, ",Object(n.b)("inlineCode",{parentName:"li"},"ContentNotPlayable")," is not reported right away when the channel goes online.\nWe wait for the content to be available in the requested format. (This only affected the first viewer of the broadcast,\nbecause the server might need time to prepare a supported format.)")),Object(n.b)("h2",null,"0.9.2 - 2017-07-20"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"MetaData class’ ",Object(n.b)("inlineCode",{parentName:"li"},"mediaDate")," field’s value is now always in UTC timezone. Previously it was PST for ",Object(n.b)("em",{parentName:"li"},"RECORDED")," and UTC for ",Object(n.b)("em",{parentName:"li"},"LIVE"),"."),Object(n.b)("li",{parentName:"ul"},"In a scenario when the client is connected to an offline channel (the SDK is in the ",Object(n.b)("inlineCode",{parentName:"li"},"WaitingForContent")," state) and the channel goes live.\nThe ",Object(n.b)("inlineCode",{parentName:"li"},"mediaDate")," is now updated with the new value."),Object(n.b)("li",{parentName:"ul"},"Disabled eCDN support for now.")),Object(n.b)("h2",null,"0.9.0 - 2017-07-04"),Object(n.b)("h3",null,"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Support for multiple players on the same Activity. In order for this to work the API had to be changed.\nMore specifically, the creation of the player changed from ",Object(n.b)("inlineCode",{parentName:"li"},"PlayerView.getUstreamPlayer()")," to a Factory based implementation:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),"private final UstreamPlayerFactory ustreamPlayerFactory = new UstreamPlayerFactory(USTREAM_PLAYER_SDK_KEY, context);\n// Where playerId is the identifier of our player. Must be persisted in order to retrieve the same instance \n// in case of a configuration change.\n// IUstreamPlayer interface is changed to UstreamPlayerAndroid.\nUstreamPlayerAndroid ustreamPlayer = ustreamPlayerFactory.createUstreamPlayer(playerId);\nif (!ustreamPlayer.isInitialized()) {\n    ustreamPlayer.initWithContent(contentDescriptor);\n}\n...\n")),"  The ",Object(n.b)("inlineCode",{parentName:"li"},"playerView")," must be set along with the listeners.\nThis enables the player to be initialized (and to be buffered) without a view to render on.\nThis can come in handy when implementing a news feed like application, where the content is in a ",Object(n.b)("inlineCode",{parentName:"li"},"RecyclerView"),".\nIt can reduce the time your users need to wait in order to see the video.",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),"...\nustreamPlayer.setPlayerListener(listener);\nustreamPlayer.setErrorListener(errorListener);\n...\nustreamPlayer.setPlayerView(playerView);\nustreamPlayer.attach();\n")),"  For further information, see the documentation."),Object(n.b)("li",{parentName:"ul"},"Support for eCDN.")),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Various bugfixes include:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Inconsistent player init when a process is restarted from ",Object(n.b)("inlineCode",{parentName:"li"},"savedInstanceState")," by the Android framework.\nAfter a process restart the player is no longer implicitly initialized.\nCalling ",Object(n.b)("inlineCode",{parentName:"li"},"ustreamPlayer.isInitialized()")," will return ",Object(n.b)("inlineCode",{parentName:"li"},"false"),", and the player needs to be initialized manually."),Object(n.b)("li",{parentName:"ul"},"No more crash if the Activity’s context is ",Object(n.b)("inlineCode",{parentName:"li"},"ContextThemeWrapper"),"."),Object(n.b)("li",{parentName:"ul"},"No more crash on certain devices on Android 4.2 with Qualcomm 800 SoCs, where the renderer reported negative video size.")))),Object(n.b)("h2",null,"0.7.0 - 2017-05-15"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Joda-Time dependency has been removed from the sample application (was added in ","[0.5.0]",")")),Object(n.b)("h2",null,"0.6.0 - 2017-04-19"),Object(n.b)("h3",null,"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Track selection API:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Ability to manage subtitles, audio, video tracks"),Object(n.b)("li",{parentName:"ul"},"Ability to select specific video formats (resolution, bitrate)"),Object(n.b)("li",{parentName:"ul"},"Track selection example in the sample application"),Object(n.b)("li",{parentName:"ul"},"Default subtitles are selected and displayed by default")))),Object(n.b)("h2",null,"0.5.1 - 2017-03-01"),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Sample application dependencies changed: Joda-Time added."),Object(n.b)("li",{parentName:"ul"},"Player SDK deployment moved from local Maven repo to AAR file. We are switching to the simple AAR file deploy until\na proper artifact repository is available."),Object(n.b)("li",{parentName:"ul"},"Bug fixes and stability improvements")),Object(n.b)("h3",null,"Removed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removed Joda-Time dependency from the user facing interface for greater flexibility. Though Joda-Time is still used\ninside the Player SDK for now, therefore it must be included as a dependency.")),Object(n.b)("h2",null,"0.4.0 - 2016-05-31"),Object(n.b)("h3",null,"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added ",Object(n.b)("inlineCode",{parentName:"li"},"IUstreamPlayer.isInitialized()")," method to check whether the player is already initialized. This is most useful\non a configuration change event. The information representing the init state of the player does not need to be manually\nsaved anymore.")),Object(n.b)("h3",null,"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Tweaks around ",Object(n.b)("inlineCode",{parentName:"li"},"IUstreamPlayer.destroy()"),". This is not bound to Android lifecycle anymore, can be called anywhere\nafter initialization."),Object(n.b)("li",{parentName:"ul"},"Bugfixes and stability improvements")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-android-changelog-mdx-0ce53aff74e9021455ef.js.map