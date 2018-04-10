export const name = "Junting";
export const getName = () => name;

const age = 18;
// 这种方式导出， 才可以这样导入： import age from './export.js'
// export default age; 

export {
    name as name2,
    age as age2
}
