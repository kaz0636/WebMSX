// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

wmsx.YM2413Tables = function() {

    var SIN_ROM = [
        2137, 1731, 1543, 1419, 1326, 1252, 1190, 1137, 1091, 1050, 1013, 979, 949, 920, 894, 869,
        846, 825, 804, 785, 767, 749, 732, 717, 701, 687, 672, 659, 646, 633, 621, 609,
        598, 587, 576, 566, 556, 546, 536, 527, 518, 509, 501, 492, 484, 476, 468, 461,
        453, 446, 439, 432, 425, 418, 411, 405, 399, 392, 386, 380, 375, 369, 363, 358,
        352, 347, 341, 336, 331, 326, 321, 316, 311, 307, 302, 297, 293, 289, 284, 280,
        276, 271, 267, 263, 259, 255, 251, 248, 244, 240, 236, 233, 229, 226, 222, 219,
        215, 212, 209, 205, 202, 199, 196, 193, 190, 187, 184, 181, 178, 175, 172, 169,
        167, 164, 161, 159, 156, 153, 151, 148, 146, 143, 141, 138, 136, 134, 131, 129,
        127, 125, 122, 120, 118, 116, 114, 112, 110, 108, 106, 104, 102, 100, 98, 96,
        94, 92, 91, 89, 87, 85, 83, 82, 80, 78, 77, 75, 74, 72, 70, 69,
        67, 66, 64, 63, 62, 60, 59, 57, 56, 55, 53, 52, 51, 49, 48, 47,
        46, 45, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30,
        29, 28, 27, 26, 25, 24, 23, 23, 22, 21, 20, 20, 19, 18, 17, 17,
        16, 15, 15, 14, 13, 13, 12, 12, 11, 10, 10, 9, 9, 8, 8, 7,
        7, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2,
        2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    var EXP_ROM = [
        2048, 2054, 2060, 2064, 2070, 2076, 2082, 2088, 2092, 2098, 2104, 2110, 2116, 2122, 2128, 2132,
        2138, 2144, 2150, 2156, 2162, 2168, 2174, 2180, 2186, 2192, 2198, 2204, 2210, 2216, 2222, 2228,
        2234, 2240, 2246, 2252, 2258, 2264, 2270, 2276, 2282, 2288, 2294, 2300, 2308, 2314, 2320, 2326,
        2332, 2338, 2344, 2352, 2358, 2364, 2370, 2376, 2384, 2390, 2396, 2402, 2410, 2416, 2422, 2428,
        2436, 2442, 2448, 2456, 2462, 2468, 2476, 2482, 2488, 2496, 2502, 2510, 2516, 2522, 2530, 2536,
        2544, 2550, 2558, 2564, 2572, 2578, 2584, 2592, 2600, 2606, 2614, 2620, 2628, 2634, 2642, 2648,
    
        2656, 2664, 2670, 2678, 2684, 2692, 2700, 2706, 2714, 2722, 2728, 2736, 2744, 2752, 2758, 2766,
        2774, 2782, 2788, 2796, 2804, 2812, 2818, 2826, 2834, 2842, 2850, 2858, 2866, 2872, 2880, 2888,
        2896, 2904, 2912, 2920, 2928, 2936, 2944, 2952, 2960, 2968, 2976, 2984, 2992, 3000, 3008, 3016,
        3024, 3032, 3040, 3050, 3058, 3066, 3074, 3082, 3090, 3100, 3108, 3116, 3124, 3132, 3142, 3150,
        3158, 3168, 3176, 3184, 3192, 3202, 3210, 3218, 3228, 3236, 3246, 3254, 3262, 3272, 3280, 3290,
        3298, 3308, 3316, 3326, 3334, 3344, 3352, 3362, 3370, 3380, 3388, 3398, 3408, 3416, 3426, 3434,
        3444, 3454, 3464, 3472, 3482, 3492, 3500, 3510, 3520, 3530, 3538, 3548, 3558, 3568, 3578, 3588,
        3596, 3606, 3616, 3626, 3636, 3646, 3656, 3666, 3676, 3686, 3696, 3706, 3716, 3726, 3736, 3746,
        3756, 3766, 3776, 3786, 3796, 3808, 3818, 3828, 3838, 3848, 3860, 3870, 3880, 3890, 3902, 3912,
        3922, 3932, 3944, 3954, 3966, 3976, 3986, 3998, 4008, 4020, 4030, 4040, 4052, 4062, 4074, 4084
    ];

    var INSTRUMENT_ROM = [
        [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ],              // 0 = Custom
        [ 0x61, 0x61, 0x1e, 0x17, 0xf0, 0x7f, 0x00, 0x17 ],              // 1 = Violin
        [ 0x13, 0x41, 0x16, 0x0e, 0xfd, 0xf4, 0x23, 0x23 ],              // 2 = Guitar
        [ 0x03, 0x01, 0x9a, 0x04, 0xf3, 0xf3, 0x13, 0xf3 ],              // 3 = Piano
        [ 0x11, 0x61, 0x0e, 0x07, 0xfa, 0x64, 0x70, 0x17 ],              // 4 = Flute
        [ 0x22, 0x21, 0x1e, 0x06, 0xf0, 0x76, 0x00, 0x28 ],              // 5 = Clarinet
        [ 0x21, 0x22, 0x16, 0x05, 0xf0, 0x71, 0x00, 0x18 ],              // 6 = Oboe
        [ 0x21, 0x61, 0x1d, 0x07, 0x82, 0x80, 0x17, 0x17 ],              // 7 = Trumpet
        [ 0x23, 0x21, 0x2d, 0x16, 0x90, 0x90, 0x00, 0x07 ],              // 8 = Organ
        [ 0x21, 0x21, 0x1b, 0x06, 0x64, 0x65, 0x10, 0x17 ],              // 9 = Horn
        [ 0x21, 0x21, 0x0b, 0x1a, 0x85, 0xa0, 0x70, 0x07 ],              // A = Synthesizer
        [ 0x23, 0x01, 0x83, 0x10, 0xff, 0xb4, 0x10, 0xf4 ],              // B = Harpsichord
        [ 0x97, 0xc1, 0x20, 0x07, 0xff, 0xf4, 0x22, 0x22 ],              // C = Vibraphone
        [ 0x61, 0x00, 0x0c, 0x05, 0xc2, 0xf6, 0x40, 0x44 ],              // D = Synthesizer Bass
        [ 0x01, 0x01, 0x56, 0x03, 0x94, 0xc2, 0x03, 0x12 ],              // E = Wood Bass
        [ 0x21, 0x01, 0x89, 0x03, 0xf1, 0xe4, 0xf0, 0x23 ]               // F = Electric Guitar
    ];

    var MULTI_FACTORS = [
     // 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 12, 12, 15, 15           // Original values
        1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 20, 24, 24, 30, 30        // Double values
    ];

    var KSL_VALUES = [      //  [ KSL ] [ BLOCK ] [ FNUM (4 higher bits) ]
        [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ]
        ], [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  2,  2,  3,  3,  4 ],
            [ 0,  0,  0,  0,  0,  1,  2,  3,  4,  5,  5,  6,  6,  7,  7,  8 ],
            [ 0,  0,  0,  2,  4,  5,  6,  7,  8,  9,  9, 10, 10, 11, 11, 12 ],
            [ 0,  0,  4,  6,  8,  9, 10, 11, 12, 13, 13, 14, 14, 15, 15, 16 ],
            [ 0,  4,  8, 10, 12, 13, 14, 15, 16, 17, 17, 18, 18, 19, 19, 20 ],
            [ 0,  8, 12, 14, 16, 17, 18, 19, 20, 21, 21, 22, 22, 23, 23, 24 ],
            [ 0, 12, 16, 18, 20, 21, 22, 23, 24, 25, 25, 26, 26, 27, 27, 28 ]
        ], [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  3,  4,  5,  6,  7,  8 ],
            [ 0,  0,  0,  0,  0,  3,  5,  7,  8, 10, 11, 12, 13, 14, 15, 16 ],
            [ 0,  0,  0,  5,  8, 11, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24 ],
            [ 0,  0,  8, 13, 16, 19, 21, 23, 24, 26, 27, 28, 29, 30, 31, 32 ],
            [ 0,  8, 16, 21, 24, 27, 29, 31, 32, 34, 35, 36, 37, 38, 39, 40 ],
            [ 0, 16, 24, 29, 32, 35, 37, 39, 40, 42, 43, 44, 45, 46, 47, 48 ],
            [ 0, 24, 32, 37, 40, 43, 45, 47, 48, 50, 51, 52, 53, 54, 55, 56 ]
        ], [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  6,  8, 10, 12, 14, 16 ],
            [ 0,  0,  0,  0,  0,  6, 10, 14, 16, 20, 22, 24, 26, 28, 30, 32 ],
            [ 0,  0,  0, 10, 16, 22, 26, 30, 32, 36, 38, 40, 42, 44, 46, 48 ],
            [ 0,  0, 16, 26, 32, 38, 42, 46, 48, 52, 54, 56, 58, 60, 62, 64 ],
            [ 0, 16, 32, 42, 48, 54, 58, 62, 64, 68, 70, 72, 74, 76, 78, 80 ],
            [ 0, 32, 48, 58, 64, 70, 74, 78, 80, 84, 86, 88, 90, 92, 94, 96 ],
            [ 0, 48, 64, 74, 80, 86, 90, 94, 96,100,102,104,106,108,110,112 ]
        ]
    ];

};

