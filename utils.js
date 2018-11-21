/*
 * Filename: /Users/naviocean/Working/HAWKING/hawkinganchor/app/helpers/hd-wallet/ed25519-hd-key/utils.js
 * Path: /Users/naviocean/Working/HAWKING/hawkinganchor
 * Created Date: Wednesday, November 21st 2018, 8:58:20 pm
 * Author: Navi Ocean
 *
 * Copyright (c) 2018 Hawking LLC
 */
exports.pathRegex = new RegExp('^m(\\/[0-9]+\')+$');
exports.replaceDerive = val => val.replace('\'', '');
