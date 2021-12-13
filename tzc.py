# -*- coding: utf-8 -*-
"""
Created on Mon Dec 13 17:55:51 2021

@author: R18102
"""

import math

class soil_prop:

    def __init__(self,dp,cu):

        self.eps = 10**(-2)
        self.dp = dp
        self.rpapu = 6.0 * cu
        self.ap = 3.141592 * ( self.dp/2.0 )**2

        """
        print(self.eps)
        print(self.dp)
        print(self.rpapu)
        """

    def rp(self,x, a):
        # x: (rp/ap) / (rp/ap)u
        # a: (sp/dp) / 0.1

        return 0.88 * x **(3.31) + 0.12 * x -a

    def solve(self, sp):

        if sp <0 :
            return 0.0

        rp1 = 0.01
        rp2 = 0.99999

        a = sp/self.dp / 0.1

        kk1 = self.rp(rp1,a)
        kk2 = self.rp(rp2,a)

        for i in range(0,100000):

            rp = 0.5 * (rp1+rp2)

            kk1 = self.rp(rp1,a)
            kk2 = self.rp(rp2,a)

            kk = self.rp(rp,a)

            if abs(kk) < self.eps: break;
            if kk * kk1 > 0 :
                rp1 = rp
            else:
                rp2 = rp

        print("cal, i=",i,rp)

        return rp

    def pb(self,wb):
        # wb: settlment
        return self.solve(wb/1000)*self.ap*self.rpapu

class soil_fric:

    def __init__(self,dp,ln,cu):

        # cu < 100.0 kN/m2
        self.ln = ln #m
        self.dp = dp #m
        self.cu = cu #kN/m2

    def tau_c(self, s):

        # return kN/m2
        # 摩擦変位：s [mm]
        # cu: せん断強度 [kN/m2]
        if s <= -10.0:
            return -self.cu
        elif -10.0 < abs(s) and abs(s) < -3.0:
            return -(0.2*self.cu/7.0 * ( s - 3.0) + 0.8*self.cu)
        elif abs(s) <= 3.0:
            return 0.8*self.cu/(3.0) * s
        elif 3.0 < s and s < 10.0:
            return 0.2*self.cu/7.0 * ( s - 3.0) + 0.8*self.cu
        elif s >= 10.0:
            return self.cu
        else:
            print("err tau_c")

    def fn(self,s):

        phai = 3.141592 * self.dp
        #print("fnnnnn",phai*self.ln*self.tau_c(s))
        return phai*self.ln*self.tau_c(s)


########################################################################
# test
#obj = soil_prop(2.0,1000.0)
#print(obj.solve(10.0))
#print(obj.pb(10.0))

#obj2 = soil_fric(2.0,1.0,100.0)
#print(obj2.tau_c(10.0))
#print(obj2.fn(10.0))

ln = []
ep = []
dp = []
ap = []
obj = []
cu = []
fc = 30.0
ec = 4700.0 * math.sqrt(30) * 1000.0 #N/mm2-> kN/m2 
d = 3.0
a = 3.141592*(d/2.0)**2
cu_for_fric = 100.0
cu_for_tips = 1000.0

ll = 30.0
ndiv = 30

del_ll = ll/ndiv
# 下から入れる
for i in range(0,ndiv):
    ln.append(del_ll)
    ep.append(ec)
    dp.append(d)
    ap.append(a)
    cu.append(cu_for_fric)
    obj.append(soil_fric(dp[i],ln[i],cu[i]))
#print(ln,ep,dp,ap,cu,obj)

wb = 2
wn = wb

# initial calculation
pb = soil_prop(dp[0],cu_for_tips).pb(wb)
fn = obj[0].fn(wn)
qn = pb + fn
print("pb=",pb,"fn=",fn,"total",pb+fn,"wb=",wb)

ncal = 100
eps = 10**(-6)

for i in range(0,ncal):

    dn = ( qn + 3.0 * pb )/4.0 * ln[0] / ( 2.0 * ap[0] * ep[0] ) * 1000.0
    wnnxt = wb + dn
    fn = obj[0].fn(wnnxt)
    qn = pb + fn

    if abs(wnnxt/wn-1.0) < eps: break;
    wn = wnnxt

print("i",i,"pb=",pb,"fn=",fn,"qn",qn,"dn",dn,"wnnxt=",wnnxt)


q_i_1 = qn
w_i_1 = wn

for i in range(1,len(ln)):

    w_i = w_i_1
    f_i = obj[i].fn(w_i)
    q_i = q_i_1 + f_i

    for j in range(0,ncal):

        dn = ( q_i + 3.0 * q_i_1 )/4.0 * ln[i] / ( 2.0 * ap[i] * ep[i] ) * 1000.0
        w_inxt = w_i_1 + dn
        f_i = obj[0].fn(w_inxt)
        q_i = q_i_1 + f_i

        if abs(w_inxt/w_i - 1.0) < eps:
            w_i = w_inxt
            break;
        w_i = w_inxt

    w_i_1 = w_i
    q_i_1 = q_i

    print("j",j,"f_i=",f_i,"q_i=",q_i,"w_i=",w_i,"dn",dn)

