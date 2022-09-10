let n = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
let x = '845';
let str = ' ';
for(i=x.length-1;i>=0;i--){
    str+=x[i];

}
for(j=0;j<str.length;j++){
    for(k=0;k<n.length;k++){
        if(str[j]==k){
            console.log(n[k]);
        }
    }
}