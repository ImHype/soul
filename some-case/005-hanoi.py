def moveTower(height,fromPole, toPole, withPole):
    if height >= 1:
        # 移动前 n-1 个碟子到 中转站
        moveTower(height-1,fromPole,withPole,toPole)
        # 移动第 n 个碟子到 目标位置
        moveDisk(fromPole,toPole)
        # 移动 中转站的碟子到 目标位置
        moveTower(height-1,withPole,toPole,fromPole)

def moveDisk(fp,tp):
    print("moving disk from",fp,"to",tp)

moveTower(2,"A","B","C")
