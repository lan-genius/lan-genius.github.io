import { base } from "$app/paths";

// place files you want to import through the `$lib` alias in this folder.
export function getRoute(s: string): string {
    if (s.startsWith('http')) {
        return s;
    }
    let ss = s.split('?');
    let path = ss[0];
    let query = '';
    if (ss.length > 0 && ss[1]) {
        query = '?' + ss[1];
    }

    if (path.endsWith('/')) {
        return base + path + query;
    }
    if (import.meta.env.MODE === 'development') {
        return base + path + query;
    }
    let name = subAfterLast(path, '/', '');
    let ext = subAfterLast(name, '.', '');
    if (ext) {
        return path + query;
    }
    return base + path + '.html' + query;
}

function subBefore(s: string, sep: string, def: string): string {
    for (var i = 0; i <= s.length - sep.length; i++) {
        if (s.substring(i, i + sep.length) == sep) {
            return s.substring(0, i)
        }
    }
    return def
}

function subAfter(s: string, sep: string, def: string): string {
    for (var i = 0; i <= s.length - sep.length; i++) {
        if (s.substring(i, i + sep.length) == sep) {
            return s.substring(i + sep.length)
        }
    }
    return def
}

function subBeforeLast(s: string, sep: string, def: string): string {
    if (sep.length >= s.length) {
        return def;
    }
    for (var i = s.length - sep.length; i > -1; i--) {
        if (s.substring(i, i + sep.length)) {
            return s.substring(0, i);
        }
    }
    return def;
}

function subAfterLast(s: string, sep: string, def: string): string {
    if (sep.length >= s.length) {
        return def;
    }
    for (var i = s.length - sep.length; i > -1; i--) {
        if (s.substring(i, i + sep.length) === sep) {
            return s.substring(i + sep.length);
        }
    }
    return def;
}
export function parseQuery(url: string): Record<string, string> {
    var m: Record<string, string> = {};
    var query = subAfter(url, '?', '');
    if (query == '') {
        return m;
    }
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i]
        var key = subBefore(pair, '=', '');
        if (key == '') {
            continue
        }
        key = decodeURIComponent(key);

        var value = subAfter(pair, '=', '');
        if (value == '') {
            continue
        }
        value = decodeURIComponent(value)
        m[key] = value
    }
    return m;
}

export function getUsername(): string {
    if (typeof location === 'undefined') return '';
    var i = location.href.indexOf('username=');
    if (i == -1) {
        return '';
    }
    return decodeURIComponent(location.href.substring(i + 'username='.length));
}
export function isMainlandChina(): boolean {
    let s = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
    return s.indexOf('shanghai') > -1 || s.indexOf('urumqi') > -1;
}