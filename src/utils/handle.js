export function deleteArray(arr, index) {
    arr.splice(index, 1)
    return arr
}

export function findArrayIndex(arr, list, idName) {
    let index = arr.findIndex((item) => {
        return item[idName] === list[idName]
    })
    return index
}

function param(data) {
    let url = ''
    for (let k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}

export function formatUrl(url, data) {
    let linkUrl = url + (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return linkUrl
}

export function deepClone(obj) {
    let result
    let oClass = isClass(obj)
    if (oClass === 'Object') {
        result = {}
    } else if (oClass === 'Array') {
        result = []
    } else {
        return obj
    }
    for (let key in obj) {
        let copy = obj[key]
        if (isClass(copy) == 'Object') {
            result[key] = arguments.callee(copy)
        } else if (isClass(copy) == 'Array') {
            result[key] = arguments.callee(copy)
        } else {
            result[key] = obj[key]
        }
    }
    return result
}

export function norlizeColumns(columnKeys, columnsMaps) {
    let columns = []
    for (let columnName of columnKeys) {
        let c = columnName.split(',')
        if (c[0] === 'index' || c[0] === 'selection') {
            columns.push({
                sequence: c[0],
                label: c[0] === 'index' ? '序号' : '',
                width: parseInt(String(c[1]).trim())
            })
        } else if (c[0] === 'image') {
            columns.push({
                image: true,
                prop: c[1].trim(),
                label: columnsMaps.get(c[1].trim()),
                width: parseInt(c[2]) || 'auto'
            })
        } else {
            let cf = {
                prop: c[0],
                label: columnsMaps.get(c[0]),
                width: parseInt(c[1]) || 'auto'
            }
            if (cf.label instanceof Object) {
                cf['formatter'] = cf.label.formatter
                cf.label = cf.label.label
            }
            columns.push(cf)
        }
    }
    return columns
}

function FormatDate(fmt, date) {
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}

export function transformDate(format, value) {
    return FormatDate(format, new Date(value))
}

export function dateMinus1(value) {
	if (!value) {
		return ''
	}
	let dateTime = new Date(value)
	dateTime = new Date(dateTime.setDate(dateTime.getDate()-1))
	return FormatDate('yyyy-MM-dd hh:mm:ss', dateTime)
}

export function toFixed(num, s) {
    var times = Math.pow(10, s)
    var des = num * times + 0.5
    des = parseInt(des, 10) / times
    return des + ''
}

export function buildTree(array, ckey) {
    if (array.length === 0) {
        return []
    }
    let menuData = []
    let mkey = 'id'
    let indexKeys = Array.isArray(array) ? array.map((e) => {
        return e[mkey]
    }) : []
    ckey = ckey || 'parentId'
    array.forEach(function(e, i) {
        if (!e[ckey] || (e[ckey] === e[mkey])) {
            delete e[ckey]
            menuData.push(deepcopy(e))
        } else if (Array.isArray(indexKeys)) {
            let parentIndex = indexKeys.findIndex(function(id) {
                return id == e[ckey]
            })
            if (parentIndex === -1) {
                menuData.push(e)
            }
        }
    })
    let findChildren = function(parentArr) {
        if (Array.isArray(parentArr) && parentArr.length) {
            parentArr.forEach(function(parentNode) {
                array.forEach(function(node) {
                    if (parentNode[mkey] === node[ckey]) {
                        if (parentNode.children) {
                            parentNode.children.push(node)
                        } else {
                            parentNode.children = [node]
                        }
                    }
                })
                if (parentNode.children) {
                    findChildren(parentNode.children)
                }
            })
        }
    }
    findChildren(menuData)
    return menuData
}

function deepcopy(source) {
    if (!source) {
        return source
    }
    let sourceCopy = source instanceof Array ? [] : {}
    for (let item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item]
    }
    return sourceCopy
}

export function normalizeObj(oldObj) {
    let obj = { ...oldObj }
    if (!(typeof obj == 'object')) {
        return false
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && (obj[key] == null || obj[key] == undefined || obj[key] == '')) {
            delete obj[key]
        }
    }
    return obj
}

export function _sort(keyName) {
    return function(objectN, objectM) {
        let valueN = objectN[keyName]
        let valueM = objectM[keyName]
        if (valueN < valueM) {
            return -1
        } else if (valueN > valueM) {
            return 1
        } else {
            return 0
        }
    }
}