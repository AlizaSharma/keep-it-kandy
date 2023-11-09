const connection = require('./config/connection');
const { Candies } = require('./models');

console.time('seeding');

// const candies = [
//     {
//     name: 
//         'Gummy Bears',
//     description: 'Test Description',
//     image: 'https://r.search.yahoo.com/cbclk2/dWU9MDU4QkM0QzAxRjYwNDU2MiZ1dD0xNjk5NDk2NzQ2MTExJnVvPTgzMDgyMjE1MDI2NTU1NCZsdD0yJnM9MSZlcz1fQU1IdzdBR1BTOERaS015ck1JWjI3TkxMVVgxY19xM2JjQjg1Q0RQZjNnSDdWMC0-/RV=2/RE=1702088746/RO=14/RU=https%3a%2f%2fwww.bing.com%2faclick%3fld%3de83zyTHfeB7zmJl7WlovGBhDVUCUy5mrT2R5pFwOoXDJIsNPahBuKnGAVadVyDcnD9IdNknjH-Z3xVaYsAohGkZZXc4j-xpHr8MWmSJX5PkERJs8C12-LLqtY6H-ZStEj3KYyt931dL8ozj2VBgdawLoEATh6HOSpa2gYlpRLYbMTJgvk8eowHu0h-CIzHe7b2qg-o-Q%26u%3daHR0cHMlM2ElMmYlMmZjbGlja3NlcnZlLmRhcnRzZWFyY2gubmV0JTJmbGluayUyZmNsaWNrJTNmbGlkJTNkOTI3MDAwNzYyMjU1OTc0NTYlMjZkc19zX2t3Z2lkJTNkNTg3MDAwMDgzNzU2NTE0MzglMjZkc19zX2ludmVudG9yeV9mZWVkX2lkJTNkOTc3MDAwMDAwMDEwNzM1MjIlMjYlMjZkc19lX2FkaWQlM2Q4MzA4MjIxNTAyNjU1NSUyNmRzX2VfdGFyZ2V0X2lkJTNkcGxhLTQ1ODY2ODE0NzkzMTAxNjclMjZkc19lX3Byb2R1Y3RfZ3JvdXBfaWQlM2Q0NTg2NjgxNDc5MzEwMTY3JTI2ZHNfZV9wcm9kdWN0X2lkJTNkRzIwNTI2Nzc2MiUyNmRzX2VfcHJvZHVjdF9jb3VudHJ5JTNkVVMlMjZkc19lX3Byb2R1Y3RfbGFuZ3VhZ2UlM2RlbiUyNmRzX2VfcHJvZHVjdF9jaGFubmVsJTNkT25saW5lJTI2ZHNfZV9uZXR3b3JrJTNkbyUyNmRzX3VybF92JTNkMiUyNmRzX2Rlc3RfdXJsJTNkaHR0cHMlM2ElMmYlMmZ3d3cuem9yby5jb20lMmZoYXJpYm8tZ29sZC1iZWFycy1vcmlnaW5hbC1ndW1taS1jYW5keS01LW96LTYxNjMwNCUyZmklMmZHMjA1MjY3NzYyJTJmJTNmZ2NsaWQlM2RkMjE4YTJiYmVjM2MxYTk1Njk3NWM3ZjdhZjE2NzE1YSUyNmdjbHNyYyUzZDNwLmRzJTI2bXNjbGtpZCUzZGQyMThhMmJiZWMzYzFhOTU2OTc1YzdmN2FmMTY3MTVhJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkbWxfYWxsX2R5bl9uYV9zc2NfQmluZyUyNTIwcjEyJTI1MjBwbGElMjUyMHNhbGVzJTI1MjAxJTI2dXRtX3Rlcm0lM2Q0NTg2NjgxNDc5MzEwMTY3JTI2dXRtX2NvbnRlbnQlM2RSMTIlMjUyMFBMQSUyNTIwU2FsZXMlMjUyMDE%26rlid%3dd218a2bbec3c1a956975c7f7af16715a/RK=2/RS=fHXjamqmo0nLlNatDJlp4Kx.i2A-;_ylt=AwrO.mUqQ0xl4zIASCBXNyoA;_ylu=Y29sbwNncTEEcG9zAy0xBHZ0aWQD;_ylc=X3IDMgRydAMw?IG=0acefa658c6941129f000000000909c3';,
//     price: 1.99,
//     quantity: 500
//     },
    
// ];


// module.exports = candies;