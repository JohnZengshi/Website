/**
 * 方法说明
 * @method $message
 * @param {String} message 提示内容
 * @param {String} type 提示类型 success/warning/info/error
 * @param {String} duration 显示时间, 毫秒
 * @return {Boolean} 返回值说明
 */
import { Message } from 'element-ui';
const $message = (message = '警告哦，这是一条警告消息', type = 'info', duration = 2000) => {
    return new Promise((resolve, reject) => {
        Message({
            message: message,
            type: type,
            duration: duration,
            onClose: () => {
                resolve(true)
            }
        });
    })
}

export {
    $message
}