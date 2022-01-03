import React, { useRef } from "react";
import { WebView } from 'react-native-webview';

const Gallery = ({ navigation, route }) => {
    const { fid } = route.params;
    const webview = useRef(null);
    const defaultTemplate = 'AcJASxeId0Rm';
    const injectJSFileFromWeb = () => {
        //give the filename according to your need
        var jsFileName = `https://rtcdn.cincopa.com/meta_json.aspx?ver=v2&fid=${defaultTemplate + '@' + fid}&id=cincopa_${fid}`;
        var fp = `
            var corescript = document.createElement('script');
            corescript.type = 'text/javascript';
            corescript.src = "${jsFileName}";
            var parent = document.getElementsByTagName('head').item(0);
            parent.appendChild(corescript);
            void(0);
        `;
        var js2 = 'https://localhost/libasync.js'
        var fp2 = `
        var corescript2 = document.createElement('script');
        corescript2.type = 'text/javascript';
        corescript2.src = "${js2}";
        var parent2 = document.getElementsByTagName('body').item(0);
        parent2.appendChild(corescript2);
        void(0);
    `;
        webview.current.injectJavaScript(fp);
        webview.current.injectJavaScript(fp2);

    }

    return (
        <WebView
            // ref={webview}

            mediaPlaybackRequiresUserAction={false}
            allowsInlineMediaPlayback={true}
            allowsFullscreenVideo={true}
            allowingReadAccessToURL={true}
            javaScriptEnabledAndroid={true}
            javaScriptEnabled={true}
            originWhitelist={['https://*']}

            source={{

                html: `
                <div class="embed-layer" style="background-image: url(https://rtcdn.cincopa.com/thumb.aspx?fid=${fid}&size=xlarge); width: 100vw; height: 100vh"></div>
                <div id="cincopa_${fid}" class='gallerydemo cincopa-fadein' style="width: 500px; height: 500px, background: #000"    >
                							<div class="embedimageContainer" style='width: 100%; height: 100vh; max-width: 100%;'>
                							</div>
                					</div>
                                    <script src="https://rtcdn.cincopa.com/meta_json.aspx?ver=v2&fid=${defaultTemplate + '@' + fid}&id=cincopa_${fid}'" type='text/javascript'></script>
                                    <script src='https://libasinc.000webhostapp.com/libasync.js?eeee' type='text/javascript'></script>
                                    <!--<script type="text/javascript">
                                    var baseUrl = "https://libasinc.000webhostapp.com/libasync.js?aaaa";
                                    (function () {
                                        var jsFileName = "https://rtcdn.cincopa.com/meta_json.aspx?ver=v2&fid=${defaultTemplate + '@' + fid}&id=cincopa_${fid}'";
                                        var corescript = document.createElement('script');
                                        corescript.type = 'text/javascript';
                                        corescript.src = jsFileName;
                                        var parent = document.getElementsByTagName('body').item(0);
                                        parent.appendChild(corescript);
                                        var corescript2 = document.createElement('script');
                                        corescript2.type = 'text/javascript';
                                        corescript2.src = baseUrl;
                                        var parent2 = document.getElementsByTagName('body').item(0);
                                        parent2.appendChild(corescript2);
                 
                                    })();
                                    </script>-->
                					`
            }}
        // onLoad={injectJSFileFromWeb}
        />
    )
}

export default Gallery;
