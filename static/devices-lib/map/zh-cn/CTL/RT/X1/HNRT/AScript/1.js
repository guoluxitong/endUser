"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CountField_1 = require("../../../../../../../meta/CountField");
var meta_1 = require("../../../../../../../meta/RT/meta");
var RT_1 = require("../../../../../../../devices/CTL/RT/RT");
var RS_3J_DJD_1 = require("../../AScript/RS_3J_DJD");
//燃油热水1段火
var Map_CTL_RT_X1_HNRT_RYRS_1 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_HNRT_RYRS_1, _super);
    function Map_CTL_RT_X1_HNRT_RYRS_1() {
        var _this = _super.call(this) || this;
        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'))
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, '补水泵'));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, '热水泵'));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器', 0, Map_CTL_RT_X1_HNRT_RYRS_1.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '补水泵', 1, Map_CTL_RT_X1_HNRT_RYRS_1.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('de_bushuibeng_shoudong/zidong_', 49, 2, '补水泵 手/自', 1, Map_CTL_RT_X1_HNRT_RYRS_1.coms_auto));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '热水泵', 2, Map_CTL_RT_X1_HNRT_RYRS_1.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '热水泵 手/自', 3, Map_CTL_RT_X1_HNRT_RYRS_1.coms_auto));
        _this.addPoint(new meta_1.OpenCloseField('oc_ranshaoqiguzhang', 5, 2, '燃烧器故障', 7, Map_CTL_RT_X1_HNRT_RYRS_1.coms_open_close));
        _this.addPoint(new meta_1.ExceptionField('ex_ranshaoqiguzhangbaojing', 45, 2, '燃烧器故障报警', 6));
        return _this;
    }
    return Map_CTL_RT_X1_HNRT_RYRS_1;
}(RS_3J_DJD_1.Map_CTL_RT_X1_3JDJD));
exports.Map_CTL_RT_X1_HNRT_RYRS_1 = Map_CTL_RT_X1_HNRT_RYRS_1;
