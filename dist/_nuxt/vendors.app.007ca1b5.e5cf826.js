/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{15:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return B})),n.d(e,"c",(function(){return Y})),n.d(e,"d",(function(){return X}));var r=n(9),o=n(3),h=n(4);r.b.SORTABLE_CHILDREN=!1;var d=function(){function t(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return t.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},t.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},t.prototype.getRectangle=function(rect){return this.minX>this.maxX||this.minY>this.maxY?o.j.EMPTY:((rect=rect||new o.j(0,0,1,1)).x=this.minX,rect.y=this.minY,rect.width=this.maxX-this.minX,rect.height=this.maxY-this.minY,rect)},t.prototype.addPoint=function(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},t.prototype.addPointMatrix=function(t,e){var a=t.a,b=t.b,n=t.c,r=t.d,o=t.tx,h=t.ty,d=a*e.x+n*e.y+o,l=b*e.x+r*e.y+h;this.minX=Math.min(this.minX,d),this.maxX=Math.max(this.maxX,d),this.minY=Math.min(this.minY,l),this.maxY=Math.max(this.maxY,l)},t.prototype.addQuad=function(t){var e=this.minX,n=this.minY,r=this.maxX,o=this.maxY,h=t[0],d=t[1];e=h<e?h:e,n=d<n?d:n,r=h>r?h:r,o=d>o?d:o,e=(h=t[2])<e?h:e,n=(d=t[3])<n?d:n,r=h>r?h:r,o=d>o?d:o,e=(h=t[4])<e?h:e,n=(d=t[5])<n?d:n,r=h>r?h:r,o=d>o?d:o,e=(h=t[6])<e?h:e,n=(d=t[7])<n?d:n,r=h>r?h:r,o=d>o?d:o,this.minX=e,this.minY=n,this.maxX=r,this.maxY=o},t.prototype.addFrame=function(t,e,n,r,o){this.addFrameMatrix(t.worldTransform,e,n,r,o)},t.prototype.addFrameMatrix=function(t,e,n,r,o){var a=t.a,b=t.b,h=t.c,d=t.d,l=t.tx,_=t.ty,m=this.minX,c=this.minY,f=this.maxX,E=this.maxY,T=a*e+h*n+l,N=b*e+d*n+_;m=T<m?T:m,c=N<c?N:c,f=T>f?T:f,E=N>E?N:E,m=(T=a*r+h*n+l)<m?T:m,c=(N=b*r+d*n+_)<c?N:c,f=T>f?T:f,E=N>E?N:E,m=(T=a*e+h*o+l)<m?T:m,c=(N=b*e+d*o+_)<c?N:c,f=T>f?T:f,E=N>E?N:E,m=(T=a*r+h*o+l)<m?T:m,c=(N=b*r+d*o+_)<c?N:c,f=T>f?T:f,E=N>E?N:E,this.minX=m,this.minY=c,this.maxX=f,this.maxY=E},t.prototype.addVertexData=function(t,e,n){for(var r=this.minX,o=this.minY,h=this.maxX,d=this.maxY,i=e;i<n;i+=2){var l=t[i],_=t[i+1];r=l<r?l:r,o=_<o?_:o,h=l>h?l:h,d=_>d?_:d}this.minX=r,this.minY=o,this.maxX=h,this.maxY=d},t.prototype.addVertices=function(t,e,n,r){this.addVerticesMatrix(t.worldTransform,e,n,r)},t.prototype.addVerticesMatrix=function(t,e,n,r,o,h){void 0===o&&(o=0),void 0===h&&(h=o);for(var a=t.a,b=t.b,d=t.c,l=t.d,_=t.tx,m=t.ty,c=this.minX,f=this.minY,E=this.maxX,T=this.maxY,i=n;i<r;i+=2){var N=e[i],I=e[i+1],R=a*N+d*I+_,y=l*I+b*N+m;c=Math.min(c,R-o),E=Math.max(E,R+o),f=Math.min(f,y-h),T=Math.max(T,y+h)}this.minX=c,this.minY=f,this.maxX=E,this.maxY=T},t.prototype.addBounds=function(t){var e=this.minX,n=this.minY,r=this.maxX,o=this.maxY;this.minX=t.minX<e?t.minX:e,this.minY=t.minY<n?t.minY:n,this.maxX=t.maxX>r?t.maxX:r,this.maxY=t.maxY>o?t.maxY:o},t.prototype.addBoundsMask=function(t,mask){var e=t.minX>mask.minX?t.minX:mask.minX,n=t.minY>mask.minY?t.minY:mask.minY,r=t.maxX<mask.maxX?t.maxX:mask.maxX,o=t.maxY<mask.maxY?t.maxY:mask.maxY;if(e<=r&&n<=o){var h=this.minX,d=this.minY,l=this.maxX,_=this.maxY;this.minX=e<h?e:h,this.minY=n<d?n:d,this.maxX=r>l?r:l,this.maxY=o>_?o:_}},t.prototype.addBoundsMatrix=function(t,e){this.addFrameMatrix(e,t.minX,t.minY,t.maxX,t.maxY)},t.prototype.addBoundsArea=function(t,area){var e=t.minX>area.x?t.minX:area.x,n=t.minY>area.y?t.minY:area.y,r=t.maxX<area.x+area.width?t.maxX:area.x+area.width,o=t.maxY<area.y+area.height?t.maxY:area.y+area.height;if(e<=r&&n<=o){var h=this.minX,d=this.minY,l=this.maxX,_=this.maxY;this.minX=e<h?e:h,this.minY=n<d?n:d,this.maxX=r>l?r:l,this.maxY=o>_?o:_}},t.prototype.pad=function(t,e){void 0===t&&(t=0),void 0===e&&(e=t),this.isEmpty()||(this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e)},t.prototype.addFramePad=function(t,e,n,r,o,h){t-=o,e-=h,n+=o,r+=h,this.minX=this.minX<t?this.minX:t,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<e?this.minY:e,this.maxY=this.maxY>r?this.maxY:r},t}(),l=function(t,b){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},l(t,b)};function _(t,b){function e(){this.constructor=t}l(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}var m,c,f,E,T,N,I,R,y,A,O,x,P,L,D,v,U,C,S,Y=function(t){function e(){var e=t.call(this)||this;return e.tempDisplayObjectParent=null,e.transform=new o.m,e.alpha=1,e.visible=!0,e.renderable=!0,e.parent=null,e.worldAlpha=1,e._lastSortedIndex=0,e._zIndex=0,e.filterArea=null,e.filters=null,e._enabledFilters=null,e._bounds=new d,e._localBounds=null,e._boundsID=0,e._boundsRect=null,e._localBoundsRect=null,e._mask=null,e._maskRefCount=0,e._destroyed=!1,e.isSprite=!1,e.isMask=!1,e}return _(e,t),e.mixin=function(source){for(var t=Object.keys(source),i=0;i<t.length;++i){var n=t[i];Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(source,n))}},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},e.prototype.getBounds=function(t,rect){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),rect||(this._boundsRect||(this._boundsRect=new o.j),rect=this._boundsRect),this._bounds.getRectangle(rect)},e.prototype.getLocalBounds=function(rect){rect||(this._localBoundsRect||(this._localBoundsRect=new o.j),rect=this._localBoundsRect),this._localBounds||(this._localBounds=new d);var t=this.transform,e=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var n=this._bounds,r=this._boundsID;this._bounds=this._localBounds;var h=this.getBounds(!1,rect);return this.parent=e,this.transform=t,this._bounds=n,this._bounds.updateID+=this._boundsID-r,h},e.prototype.toGlobal=function(t,e,n){return void 0===n&&(n=!1),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,e)},e.prototype.toLocal=function(t,e,n,r){return e&&(t=e.toGlobal(t,n,r)),r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,n)},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(t,e,n,r,o,h,d,l,_){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=1),void 0===r&&(r=1),void 0===o&&(o=0),void 0===h&&(h=0),void 0===d&&(d=0),void 0===l&&(l=0),void 0===_&&(_=0),this.position.x=t,this.position.y=e,this.scale.x=n||1,this.scale.y=r||1,this.rotation=o,this.skew.x=h,this.skew.y=d,this.pivot.x=l,this.pivot.y=_,this},e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this.emit("destroyed"),this.removeAllListeners(),this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!0},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{get:function(){return null===this.tempDisplayObjectParent&&(this.tempDisplayObjectParent=new X),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.transform.rotation*o.i},set:function(t){this.transform.rotation=t*o.b},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask!==t){var e;if(this._mask)(e=this._mask.maskObject||this._mask)._maskRefCount--,0===e._maskRefCount&&(e.renderable=!0,e.isMask=!1);if(this._mask=t,this._mask)0===(e=this._mask.maskObject||this._mask)._maskRefCount&&(e.renderable=!1,e.isMask=!0),e._maskRefCount++}},enumerable:!1,configurable:!0}),e}(h.c),X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sortDirty=null,e}return _(e,t),e}(Y);function M(a,b){return a.zIndex===b.zIndex?a._lastSortedIndex-b._lastSortedIndex:a.zIndex-b.zIndex}Y.prototype.displayObjectUpdateTransform=Y.prototype.updateTransform,function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"}(m||(m={})),function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"}(c||(c={})),function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"}(f||(f={})),function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"}(N||(N={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"}(I||(I={})),function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"}(R||(R={})),function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"}(y||(y={})),function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"}(A||(A={})),function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(O||(O={})),function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"}(x||(x={})),function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"}(P||(P={})),function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"}(L||(L={})),function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"}(D||(D={})),function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"}(v||(v={})),function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE"}(U||(U={})),function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"}(C||(C={})),function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"}(S||(S={}));var B=function(t){function e(){var e=t.call(this)||this;return e.children=[],e.sortableChildren=r.b.SORTABLE_CHILDREN,e.sortDirty=!1,e}return _(e,t),e.prototype.onChildrenChange=function(t){},e.prototype.addChild=function(){for(var t=arguments,e=[],n=0;n<arguments.length;n++)e[n]=t[n];if(e.length>1)for(var i=0;i<e.length;i++)this.addChild(e[i]);else{var r=e[0];r.parent&&r.parent.removeChild(r),r.parent=this,this.sortDirty=!0,r.transform._parentID=-1,this.children.push(r),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",r,this,this.children.length-1),r.emit("added",this)}return e[0]},e.prototype.addChildAt=function(t,e){if(e<0||e>this.children.length)throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(e,0,t),this._boundsID++,this.onChildrenChange(e),t.emit("added",this),this.emit("childAdded",t,this,e),t},e.prototype.swapChildren=function(t,e){if(t!==e){var n=this.getChildIndex(t),r=this.getChildIndex(e);this.children[n]=e,this.children[r]=t,this.onChildrenChange(n<r?n:r)}},e.prototype.getChildIndex=function(t){var e=this.children.indexOf(t);if(-1===e)throw new Error("The supplied DisplayObject must be a child of the caller");return e},e.prototype.setChildIndex=function(t,e){if(e<0||e>=this.children.length)throw new Error("The index "+e+" supplied is out of bounds "+this.children.length);var n=this.getChildIndex(t);Object(h.x)(this.children,n,1),this.children.splice(e,0,t),this.onChildrenChange(e)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments,e=[],n=0;n<arguments.length;n++)e[n]=t[n];if(e.length>1)for(var i=0;i<e.length;i++)this.removeChild(e[i]);else{var r=e[0],o=this.children.indexOf(r);if(-1===o)return null;r.parent=null,r.transform._parentID=-1,Object(h.x)(this.children,o,1),this._boundsID++,this.onChildrenChange(o),r.emit("removed",this),this.emit("childRemoved",r,this,o)}return e[0]},e.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,e.transform._parentID=-1,Object(h.x)(this.children,t,1),this._boundsID++,this.onChildrenChange(t),e.emit("removed",this),this.emit("childRemoved",e,this,t),e},e.prototype.removeChildren=function(t,e){void 0===t&&(t=0),void 0===e&&(e=this.children.length);var n,r=t,o=e-r;if(o>0&&o<=e){n=this.children.splice(r,o);for(var i=0;i<n.length;++i)n[i].parent=null,n[i].transform&&(n[i].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(i=0;i<n.length;++i)n[i].emit("removed",this),this.emit("childRemoved",n[i],this,i);return n}if(0===o&&0===this.children.length)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.sortChildren=function(){for(var t=!1,i=0,e=this.children.length;i<e;++i){var n=this.children[i];n._lastSortedIndex=i,t||0===n.zIndex||(t=!0)}t&&this.children.length>1&&this.children.sort(M),this.sortDirty=!1},e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var i=0,t=this.children.length;i<t;++i){var e=this.children[i];e.visible&&e.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var i=0;i<this.children.length;i++){var t=this.children[i];if(t.visible&&t.renderable)if(t.calculateBounds(),t._mask){var e=t._mask.maskObject||t._mask;e.calculateBounds(),this._bounds.addBoundsMask(t._bounds,e._bounds)}else t.filterArea?this._bounds.addBoundsArea(t._bounds,t.filterArea):this._bounds.addBounds(t._bounds)}this._bounds.updateID=this._boundsID},e.prototype.getLocalBounds=function(rect,e){void 0===e&&(e=!1);var n=t.prototype.getLocalBounds.call(this,rect);if(!e)for(var i=0,r=this.children.length;i<r;++i){var o=this.children[i];o.visible&&o.updateTransform()}return n},e.prototype._calculateBounds=function(){},e.prototype.render=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable)if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else{this._render(t);for(var i=0,e=this.children.length;i<e;++i)this.children[i].render(t)}},e.prototype.renderAdvanced=function(t){var e=this.filters,mask=this._mask;if(e){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var i=0;i<e.length;i++)e[i].enabled&&this._enabledFilters.push(e[i])}var n=e&&this._enabledFilters&&this._enabledFilters.length||mask&&(!mask.isMaskData||mask.enabled&&(mask.autoDetect||mask.type!==U.NONE));n&&t.batch.flush(),e&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),mask&&t.mask.push(this,this._mask),this._render(t);i=0;for(var r=this.children.length;i<r;i++)this.children[i].render(t);n&&t.batch.flush(),mask&&t.mask.pop(this),e&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},e.prototype._render=function(t){},e.prototype.destroy=function(e){t.prototype.destroy.call(this),this.sortDirty=!1;var n="boolean"==typeof e?e:e&&e.children,r=this.removeChildren(0,this.children.length);if(n)for(var i=0;i<r.length;++i)r[i].destroy(e)},Object.defineProperty(e.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;this.scale.x=0!==e?t/e:1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;this.scale.y=0!==e?t/e:1,this._height=t},enumerable:!1,configurable:!0}),e}(Y);B.prototype.containerUpdateTransform=B.prototype.updateTransform},186:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),o=n(3),h=n(2),d=new o.j,l=function(){function t(t){this.renderer=t}return t.prototype.image=function(t,e,n){var image=new Image;return image.src=this.base64(t,e,n),image},t.prototype.base64=function(t,e,n){return this.canvas(t).toDataURL(e,n)},t.prototype.canvas=function(e){var n,o,l,_=this.renderer,m=!1,c=!1;e&&(e instanceof h.m?l=e:(l=this.renderer.generateTexture(e),c=!0)),l?(n=l.baseTexture.resolution,o=l.frame,m=!1,_.renderTexture.bind(l)):(n=this.renderer.resolution,m=!0,(o=d).width=this.renderer.width,o.height=this.renderer.height,_.renderTexture.bind(null));var f=Math.floor(o.width*n+1e-4),E=Math.floor(o.height*n+1e-4),T=new r.b(f,E,1),N=new Uint8Array(4*f*E),I=_.gl;I.readPixels(o.x*n,o.y*n,f,E,I.RGBA,I.UNSIGNED_BYTE,N);var R=T.context.getImageData(0,0,f,E);if(t.arrayPostDivide(N,R.data),T.context.putImageData(R,0,0),m){var y=new r.b(T.width,T.height,1);y.context.scale(1,-1),y.context.drawImage(T.canvas,0,-E),T.destroy(),T=y}return c&&l.destroy(!0),T.canvas},t.prototype.pixels=function(e){var n,r,o,l=this.renderer,_=!1;e&&(e instanceof h.m?o=e:(o=this.renderer.generateTexture(e),_=!0)),o?(n=o.baseTexture.resolution,r=o.frame,l.renderTexture.bind(o)):(n=l.resolution,(r=d).width=l.width,r.height=l.height,l.renderTexture.bind(null));var m=r.width*n,c=r.height*n,f=new Uint8Array(4*m*c),E=l.gl;return E.readPixels(r.x*n,r.y*n,m,c,E.RGBA,E.UNSIGNED_BYTE,f),_&&o.destroy(!0),t.arrayPostDivide(f,f),f},t.prototype.destroy=function(){this.renderer=null},t.arrayPostDivide=function(t,e){for(var i=0;i<t.length;i+=4){var n=e[i+3]=t[i+3];0!==n?(e[i]=Math.round(Math.min(255*t[i]/n,255)),e[i+1]=Math.round(Math.min(255*t[i+1]/n,255)),e[i+2]=Math.round(Math.min(255*t[i+2]/n,255))):(e[i]=t[i],e[i+1]=t[i+1],e[i+2]=t[i+2])}},t}()}}]);