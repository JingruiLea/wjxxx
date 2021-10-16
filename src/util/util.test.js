const util = require("./util")
// @ponicode
describe("util.getCookie", () => {
    test("0", () => {
        let callFunction = () => {
            util.getCookie("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            util.getCookie(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            util.getCookie(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            util.getCookie(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            util.getCookie(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            util.getCookie(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("util.setCookie", () => {
    test("0", () => {
        let callFunction = () => {
            util.setCookie("Pierre Edouard", "Elio", 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            util.setCookie("Anas", "Elio", 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            util.setCookie(10, "Dillenberg", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            util.setCookie("George", "Elio", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            util.setCookie("bar", "Elio", 366)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            util.setCookie(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("util.delCookie", () => {
    test("0", () => {
        let callFunction = () => {
            util.delCookie(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            util.delCookie("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            util.delCookie(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            util.delCookie("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            util.delCookie("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            util.delCookie(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
