webpackJsonp(["main"],{

/***/ "../../../../../client/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../client/src/app/api.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://localhost:3000/';
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../client/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-right{\n    height: 35px;\n    right: 5px;\n    top: 5px;\n    float: right;\n    position: absolute;\n}\n\n.btn-right2{\n    right: 5px;\n    position: relative;\n}\n\n.border-post{\n    margin: 5px;\n}\n\n\n.text-smallheader{\n    margin-top: -7px;\n    margin-bottom: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../client/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Rahottic';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../client/src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../client/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../client/src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../client/src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../client/src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_edit_edit_component__ = __webpack_require__("../../../../../client/src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_view_view_component__ = __webpack_require__("../../../../../client/src/app/components/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_blogpost_service__ = __webpack_require__("../../../../../client/src/app/services/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../client/src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__("../../../../../client/src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'edit', canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_10__components_edit_edit_component__["a" /* EditComponent */] },
    { path: 'edit/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_10__components_edit_edit_component__["a" /* EditComponent */] },
    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_11__components_view_view_component__["a" /* ViewComponent */] },
    { path: 'view/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_view_view_component__["a" /* ViewComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_view_view_component__["a" /* ViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_blogpost_service__["a" /* BlogpostService */],
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../client/src/app/components/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#divBtns{\n    right: 5px;\n    top: -10px;\n    float: right;\n    position: relative;\n}\n\n#btnDelete{\n    margin-top: 2px;\n    height: 36px;\n}\n\n#btnSave{\n    width: 150px;\n    height: 52px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <fieldset>\n    <legend>Edit Post</legend>\n    <div id=\"divBtns\">\n        <button type=\"submit\" id=\"btnSave\" (click)=\"onSaveClick()\" class=\"btn btn-outline-success\">  {{isNewPost? 'Create' : 'Update'}}  </button>\n        <button type=\"submit\" id=\"btnDelete\" (click)=\"onDeleteClick()\" class=\"btn btn-outline-danger\" disabled=\"\">Delete</button>    \n    </div>\n    <!-- <div class=\"btn-group\" data-toggle=\"buttons\">\n      <label class=\"btn btn-outline-secondary\">\n        <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\"> Public  \n      </label>\n      <label class=\"btn btn-outline-secondary\">\n        <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\"> Private\n      </label>\n    </div> -->\n    <fieldset class=\"form-group\">\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input [(ngModel)]=\"isPublic\" name=\"isPublic\" class=\"form-check-input\" type=\"checkbox\" > Public\n        </label>\n      </div>\n    </fieldset>\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"blogpostTitle\" name=\"blogpostTitle\" type=\"text\" class=\"form-control\" id=\"blogpostTitle\" aria-describedby=\"emailHelp\" placeholder=\"Title\">\n    </div>\n\n    <div class=\"form-group\">\n      <textarea [(ngModel)]=\"blogpostContent\" name=\"blogpostContent\" class=\"form-control\" id=\"blogpostContent\" rows=\"50\" placeholder=\"Content\"></textarea>\n    </div>\n\n  </fieldset>\n</form>"

/***/ }),

/***/ "../../../../../client/src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blogpost_service__ = __webpack_require__("../../../../../client/src/app/services/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(_auth, _blogposts, _flashMessage, _router, _route) {
        this._auth = _auth;
        this._blogposts = _blogposts;
        this._flashMessage = _flashMessage;
        this._router = _router;
        this._route = _route;
        this.isPublic = false;
        this.isNewPost = true;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this._blogposts.getPostById(id).subscribe(function (data) {
                var post = data.blogpost;
                if (post) {
                    _this.blogpostTitle = post.title,
                        _this.blogpostContent = post.content,
                        _this.isPublic = post.public,
                        _this.isNewPost = false,
                        _this.blogpostId = id;
                }
            });
        }
    };
    EditComponent.prototype.onSaveClick = function () {
        var _this = this;
        var username = this._auth.getUsername();
        var blogpost = {
            id: this.blogpostId,
            author: username,
            date: new Date(),
            title: this.blogpostTitle,
            content: this.blogpostContent,
            public: this.isPublic
        };
        if (this.isNewPost) {
            this._blogposts.putNewBlogpost(blogpost).subscribe(function (data) {
                if (data.success) {
                    _this._flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this._router.navigate(['/home']);
                }
                else {
                    _this._flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this._blogposts.updateBlogpost(blogpost).subscribe(function (data) {
                if (data.success) {
                    _this._flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this._flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../client/src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/components/edit/edit.component.css"), __webpack_require__("../../../../../client/src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_blogpost_service__["a" /* BlogpostService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#bdgPrivate{\n    width:60px;\n    margin: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n\n  <table class=\"table\">\n    <tbody>\n      <tr *ngFor=\"let post of posts\">\n        <div *ngIf=\"_auth.isLoggedIn() && post.public === false\" class=\"card border-success border-post\">\n            <label class=\"badge badge-success\" id=\"bdgPrivate\">Private</label>\n          <button *ngIf=\"_auth.isLoggedIn()\" [routerLink]=\"['/edit', post.id]\"  type=\"button\" class=\"btn btn-outline-primary btn-right\">Edit</button>\n          <div class=\"card-body\">\n            <blockquote class=\"card-blockquote\">\n              <h3>{{post.title}}</h3>\n              <header class=\"blockquote-footer text-smallheader\">{{post.date}}  by {{post.author}}</header>\n              <p>\n                {{post.content}}\n              </p>\n            </blockquote>\n          </div>\n        </div>\n\n        <div *ngIf=\"post.public === true\" class=\"card border-primary border-post\">\n          <button *ngIf=\"_auth.isLoggedIn()\" [routerLink]=\"['/edit', post.id]\"  type=\"button\" class=\"btn btn-outline-primary btn-right\">Edit</button>\n          <div class=\"card-body\">\n            <blockquote class=\"card-blockquote\">\n                <h3>{{post.title}}</h3>\n                <header class=\"blockquote-footer text-smallheader\">{{post.date}}  by {{post.author}}</header>\n                <p>\n                  {{post.content}}\n                </p>\n            </blockquote>\n          </div>\n        </div>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../client/src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__ = __webpack_require__("../../../../../client/src/app/services/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    //should this be handled using a messaging/observer deisgn pattern, 
    // or just ngIf and different array of blogposts?  Second option is slower
    // and more resource intensive, since there would be 2x data held.
    function HomeComponent(_blogposts, _auth) {
        this._blogposts = _blogposts;
        this._auth = _auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.refreshPosts();
    };
    HomeComponent.prototype.refreshPosts = function () {
        var _this = this;
        this.posts = [];
        this._blogposts.getAllPosts().subscribe(function (data) {
            //console.log(data.blogposts)
            var posts = data.blogposts;
            posts.forEach(function (post) {
                //console.log(post)
                _this.posts.push({
                    id: post._id,
                    date: new Date(),
                    author: post.author,
                    title: post.title,
                    content: post.content,
                    public: post.public
                });
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../client/src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/components/home/home.component.css"), __webpack_require__("../../../../../client/src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__["a" /* BlogpostService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onLoginSubmit()\" class=\"form-inline my-2 my-lg-0\">\n  <input *ngIf=\"!_auth.isLoggedIn()\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Username\" >\n  <input *ngIf=\"!_auth.isLoggedIn()\" [(ngModel)]=\"password\" name=\"password\"  class=\"form-control mr-sm-2\" type=\"password\" placeholder=\"Password\">\n  <button *ngIf=\"!_auth.isLoggedIn()\" type=\"submit\" class=\"btn btn-outline-primary\">Login</button>\n  <button *ngIf=\"_auth.isLoggedIn()\" (click)=\"onLogoutClick()\" class=\"btn btn-outline-primary\">Logout</button>\n</form>\n"

/***/ }),

/***/ "../../../../../client/src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_auth, _flashMessage, _router) {
        this._auth = _auth;
        this._flashMessage = _flashMessage;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        //todo
        var user = {
            username: this.username,
            password: this.password
        };
        //authenticate with service
        this._auth.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this._flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this._auth.storeUserData(data.token, data.user);
                //refresh pages to show private posts as well as create/edit
                _this._router.navigate(['/home']);
            }
            else {
                _this._flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    LoginComponent.prototype.onLogoutClick = function () {
        this._auth.logout();
        this._router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../client/src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/components/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Rahottic</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n\n      <button *ngIf=\"_auth.isLoggedIn()\" id=\"btnNewPost\" [routerLink]=\"['/edit']\" class=\"btn btn-outline-success btn-right2\">New Post</button>\n      <app-login></app-login>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../client/src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onNewPostClick = function () {
        this._router.navigate(['/edit']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../client/src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/components/navbar/navbar.component.css"), __webpack_require__("../../../../../client/src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/components/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/components/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  view works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/src/app/components/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewComponent = (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../client/src/app/components/view/view.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/components/view/view.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._auth.isLoggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/home']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../client/src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__("../../../../../client/src/app/api.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this._api = __WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* AppSettings */].API_ENDPOINT + 'users';
    }
    //register user
    AuthService.prototype.authenticateUser = function (user) {
        var url = this._api + '/authenticate';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    //logout
    AuthService.prototype.logout = function () {
        this.authToken = null;
        localStorage.clear();
    };
    //store token
    AuthService.prototype.storeUserData = function (token, user) {
        if (token != undefined) {
            localStorage.setItem('id_token', token);
            localStorage.setItem('user', user); //needed?
            localStorage.setItem('username', user.username);
        }
    };
    // get user
    AuthService.prototype.isLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.getUser = function () {
        var user = localStorage.getItem('user');
        console.log(user);
        return user; //should this be from db?
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../client/src/app/services/blogpost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogpostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__("../../../../../client/src/app/api.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {tokenNotExpired } from 'angular2-jwt'
var BlogpostService = (function () {
    function BlogpostService(_http, _auth) {
        this._http = _http;
        this._auth = _auth;
        this._api = __WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* AppSettings */].API_ENDPOINT + 'posts'; //should root for api be in shared file?
    }
    BlogpostService.prototype.getPostById = function (id) {
        if (id) {
            var url = this._api;
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application.json');
            if (this._auth.isLoggedIn()) {
                headers.append('Authorization', this._auth.getToken());
                url += '/private-post/params?param1=' + id;
            }
            else {
                url += '/post';
            }
            return this._http.get(url, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    //map and return as IBlogpost[]
    BlogpostService.prototype.getAllPosts = function () {
        var url = this._api;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        if (this._auth.isLoggedIn()) {
            url += '/all';
            headers.append('Authorization', this._auth.getToken());
        }
        else {
            url += '/public';
        }
        return this._http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    BlogpostService.prototype.getAllPublicPosts = function () {
        //Neccesary?
    };
    //TODO
    BlogpostService.prototype.putNewBlogpost = function (blogpost) {
        if (this._auth.isLoggedIn() && blogpost) {
            var url = this._api + '/new';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', this._auth.getToken());
            return this._http.post(url, blogpost, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            //TODO handle errors
            console.log('something went wrong');
        }
    };
    BlogpostService.prototype.updateBlogpost = function (blogpost) {
        if (this._auth.isLoggedIn() && blogpost) {
            var url = this._api + '/update/params?param1=' + blogpost.id; //neccesary? id could be oulled from req body
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', this._auth.getToken());
            return this._http.post(url, blogpost, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            //tODO
            console.log('update unsuccessful');
        }
    };
    BlogpostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], BlogpostService);
    return BlogpostService;
}());



/***/ }),

/***/ "../../../../../client/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../client/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map