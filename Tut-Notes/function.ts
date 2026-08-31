function abcd(name: string, age: number, cb: (arg: string) => void) {
  cb("Hello");
}

abcd("neesha", 12, (arg: string) => {
  console.log("abcdefd");
});


//! Generics