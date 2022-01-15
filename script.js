const path = require('path')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const fs = require('fs')
const success = (code, lang) => console.log('\x1b[32m',`Successfully ✓ created new basic random ${lang} file! The file hash:`, code)
const simpleCode = () => {
    let code = '';
    let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(let i = 0; i < 18; i++){
        code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
    }
}


readline.question('Which file you want to create? (Write the extension without point):  ', (ext) => {
    if (ext.toLowerCase() == 'jsx') {
        const randJsFile = () => {
            let code = '';
            let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            for(let i = 0; i < 18; i++){
                code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
            }
            fs.mkdir('reactComponentFiles', (err) => {
                if (err) {

                }
            })
            fs.writeFile(`./reactComponentFiles/${code}.react.js`, `import React from "react";
export default function App() {
    return (
       <div className="container">
          <h1>Hello World</h1>
       </div>
    );
};`, err => {
                console.log('\x1b[32m','Successfully ✓ created new basic random react file! The file hash:', code)
                if(err) {
                    console.log(err)
                }
            })
        }
        randJsFile()
        readline.close()
    }

    if (ext.toLowerCase() == 'java') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        const randJavaFile = () => {
            fs.mkdir('javaFiles', (err) => {
                if (err) {

                }
            })
            fs.writeFile(`./javaFiles/${code}.java`, `public static Main(String[] args) {
    System.out.println('Hello World!');
}`, () => {
                console.log('\x1b[32m','Successfully ✓ created new basic random java file! The file hash:', code)
            })
        }

        randJavaFile()
        readline.close()
    }

    if (ext.toLowerCase() == 'cs') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        fs.mkdir('csFiles', (err) => {
            if (err) {

            }
        })
        const randCsFile = () => {
            fs.writeFile(`csFiles/${code}.cs`, `using System;
using System.Collections;
using System.Collections.Generic;


static void Main(string[] args)
{
    Console.WriteLine('Hello World');
}
        `, () => {
                console.log('\x1b[32m','Successfully ✓ created new basic random c# file! The file hash:', code)
            })
        }
        randCsFile()
        readline.close()
    }

    if (ext.toLowerCase() == 'cpp') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        fs.mkdir('cppFiles', (err) => {
            if (err) {

            }
        })

        const randCppFiles = () => {
            fs.writeFile(`cppFiles/${code}.cpp`, `#include <iostream>

using namespace std;

int main() {
    std::cout << 'Hello World' << std::endl;
}`, () => {
                console.log('\x1b[32m','Successfully ✓ created new basic random c++ file! The file hash:', code)
            })
        }
        randCppFiles()
        readline.close()
    }

    if (ext.toLowerCase() == 'c') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        fs.mkdir('cFiles', (err) => {
            if (err) {

            }
        })
        const randCFiles = () => {
            fs.writeFile(`cFiles/${code}.c`, `#include <stdio.h>

int main() {
    printf('Hello World');
}`, () => success(code, 'C'))
        }
        randCFiles()
        readline.close()
    }

    if (ext.toLowerCase() == 'php') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        fs.mkdir('phpFiles', (err) => {
            if (err) {

            }
        })
        const randPhpFiles = () => {
            fs.writeFile(`phpFiles/${code}.php`, `<?php
            
?>`, () => success(code, 'PHP'))
        }

        randPhpFiles()
        readline.close()
    }

    if (ext.toLowerCase() == 'html') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        fs.mkdir('htmlSite', (err) => {
            if (err) {}
        })
        const randHtmlFiles = () => {
            fs.writeFile(`htmlSite/${code}.html`, `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="${code}.css">
</head>
<body>


<script src="./${code}.js"></script>
</body>
</html>`, () => success(code, 'HTML'))

            fs.writeFile(`htmlSite/${code}.js`, ``, (err) => {
                if (err) {}
            })
            fs.writeFile(`htmlSite/${code}.css`, '', (err) => {
                if (err) {}
            })
        }

        randHtmlFiles()
        readline.close()
    }

    if (ext.toLowerCase() == 'js') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        fs.mkdir('jsFiles', (err) => {
            if(err) {}
        })
        const randJsFiles = () => {
            fs.writeFile(`jsFiles/${code}.js`, '', () => success(code, 'JS'))
        }
        randJsFiles()
        readline.close()
    }

    if (ext != 'c' && ext != 'js' && ext != 'php' && ext != 'html' && ext != 'jsx' && ext != 'cpp' && ext != 'cs' && ext != 'java') {
        let code = '';
        let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i < 18; i++){
            code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
        }
        fs.mkdir(`${ext}Files`, (err) => {
            if (err) {}
        })
        const randFile = () => {
            fs.writeFile(`${ext}Files/${code}.${ext}`, '', () => success(code, ext))
        }
        randFile()
        readline.close()
    }
})
