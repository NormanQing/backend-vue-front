export default class Utils {
  /**
   * 判断一个字符串是否是数字，如果字符串是数字转换位数字，否则返回false
   * @param {字符串} str
   */
  static checkStrToNum (str) {
    let reg = /^[0-9]+.?[0-9]*$/
    if (reg.test(str)) {
      return true
    }
    return false
  }
}
