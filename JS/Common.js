
//工具
Tools = {
    Angle: function (arc) {
        return Math.PI / 180 * (+arc)
    },
    Random: function (max, min) {
        return Math.random() * (max - min) + min
    },
    OverLayout: function (point, max, min) {
        var min = min || 0;
        if (point < 0) {
            point = min + this.Random(max, min);
        }
        else if (point > max) {
            point = max - this.Random(max, min);
        }
        return point;
    },
    Observer: {
        _message: {},
        //注册
        register: function (type, fn) {
            if (this._message[type]) {
                this._message[type].push(fn);
            } else {
                this._message[type] = [fn];
            };
            return this;
        },
        //发布
        fire: function (type, opt) {
            if (!this._message[type]) return false;
            this._message[type].forEach(function (item) {
                item(opt);
            });
            return this;
        },
        //取消
        remove: function (type, fn) {
            if (arguments.length == 2) {
                var i = this._message[type].indexOf(fn);
                if (!this._message[type] || i == -1) return false;
                this._message[type].splice(i, 1);
                return this;
            }
            else {
                this._message[type] = [];
                return this;
            }
        }
    }
}


$(document).ready(function () {



});