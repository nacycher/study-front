const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
}

const isAdult = (age) => {
    if (age > 18) {
        console.log('成年人')
    } else {
        console.log('未成年')
    }
}

// export 功能导出
export {user, isAdult}