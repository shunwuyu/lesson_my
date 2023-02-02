#include<iostream>
#include<string>
using namespace std;

string add(string &a,string &b)
{
    string res;
    for(int i = a.size() - 1,j = b.size() - 1,t = 0;i >= 0 || j >= 0 || t;-- i,-- j)
    {
        if(i >= 0)  t += a[i] - '0';
        if(j >= 0)  t += b[j] - '0';
        res += to_string(t % 10);
        t /= 10;
    }
    reverse(res.begin(),res.end());
    return res;
}

int main()
{
    string s1,s2;
    cin >> s1 >> s2;
    cout << add(s1,s2);
    return 0;
}