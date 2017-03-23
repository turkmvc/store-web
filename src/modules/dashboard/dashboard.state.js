angular.module("store.dashboard")
    .config(["storeStateProvider", "stateNames",
        function (storeStateProvider, stateNames) {
            "use strict";

            storeStateProvider
                .state(stateNames.DASHBOARD, {
                    "params": {
                    },
                    "url": "/dashboard",
                    "views": {
                        "contentContainer": {
                            "controller": "dashboardController as dashboard",
                            "templateUrl": "/modules/dashboard/dashboard.html"
                        }
                    }
                })
                .state(stateNames.ROLE, {
                    "url": "/role",
                    "views": {
                        "contentContainer": {
                            "controller": "roleController as role",
                            "templateUrl": "/modules/dashboard/role/role.html"
                        }
                    }
                })
                .state(stateNames.USER, {
                    "url": "/user",
                    "views": {
                        "contentContainer": {
                            "controller": "userController as user",
                            "templateUrl": "/modules/dashboard/user/user.html"
                        }
                    }
                })
                .state(stateNames.COUNTY, {
                    "url": "/county",
                    "views": {
                        "contentContainer": {
                            "controller": "countyController as county",
                            "templateUrl": "/modules/dashboard/county/county.html"
                        }
                    }
                })
                .state(stateNames.PRODUCT, {
                    "params": {
                    },
                    "url": "/product",
                    "views": {
                        "contentContainer": {
                            "controller": "productController as product",
                            "templateUrl": "/modules/dashboard/product/product.html"
                        }
                    }
                })
                .state(stateNames.PRODUCT_CATEGORY, {
                    "params": {
                    },
                    "url": "/productCategory",
                    "views": {
                        "contentContainer": {
                            "controller": "productCategoryController as productCategory",
                            "templateUrl": "/modules/dashboard/productCategory/product-category.html"
                        }
                    }
                })
                .state(stateNames.SUB_PRODUCT_CATEGORY, {
                    "params": {
                    },
                    "url": "/subProductCategory",
                    "views": {
                        "contentContainer": {
                            "controller": "subProductCategoryController as subProductCategory",
                            "templateUrl": "/modules/dashboard/subProductCategory/sub-product-category.html"
                        }
                    }
                })
                .state(stateNames.STORE, {
                    "params": {
                    },
                    "url": "/store",
                    "views": {
                        "contentContainer": {
                            "controller": "storeController as store",
                            "templateUrl": "/modules/dashboard/store/store.html"
                        }
                    }
                })
                .state(stateNames.FIRM, {
                    "params": {
                    },
                    "url": "/firm",
                    "views": {
                        "contentContainer": {
                            "controller": "firmController as firm",
                            "templateUrl": "/modules/dashboard/firm/firm.html"
                        }
                    }
                })
                .state(stateNames.FIRM_TYPE, {
                    "url": "/firmType",
                    "views": {
                        "contentContainer": {
                            "controller": "firmTypeController as firmType",
                            "templateUrl": "/modules/dashboard/firmType/firmType.html"
                        }
                    }
                })
        }
    ]);
