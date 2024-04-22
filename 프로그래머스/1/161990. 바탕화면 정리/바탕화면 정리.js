function solution(wallpaper) {
    let lux, luy, rdx, rdy;
    let row = lux = luy = rdx = rdy = 0;

    for (; row < wallpaper.length ; row++) {
        if (wallpaper[row].includes("#")) {
            lux = rdx = row;
            luy = wallpaper[row].indexOf("#");
            rdy = wallpaper[row].lastIndexOf("#");
            break;
        }
    }   

    row++;

    for (; row < wallpaper.length ; row++) {
        if (wallpaper[row].includes("#")) {
            rdx = row;

            if (wallpaper[row].indexOf("#") < luy) { 
                luy = wallpaper[row].indexOf("#"); 
            }    
            if (wallpaper[row].lastIndexOf("#") > rdy) { 
                rdy = wallpaper[row].lastIndexOf("#"); 
            }
        }
    }      

    return [lux, luy, ++rdx, ++rdy];
}
