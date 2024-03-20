import { RiHome2Line } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiMobile1, CiViewList } from "react-icons/ci";

const users = [
    {
        id: 1,
        email: "doantranbadat@gmail.com",
        password: "123456789",
        full_name: "Dat Doan"
    },
    {
        id: 2,
        email: "staff@gmail.com",
        password: "123456789",
        full_name: "John"
    },
]

const menuList = [
    {
        id: 1,
        name: 'Actual data',
        logo: RiHome2Line,
        path: '/'
    },
    {
        id: 2,
        name: 'Reservation forecast',
        logo: AiOutlineTransaction,
        path: '/reservationforecast'
    },
    {
        id: 3,
        name: 'Period detail',
        logo: CiViewList,
        path: '/perioddetail'
    },
]

const transactionCategory = [
    {
        id: "65b45ca6c06aa8dfa60a5256",
        name: "electricbill",
        label: "Electric bill",
        img: GiElectric
    },
    {
        id: "65b45d1dc06aa8dfa60a5257",
        name: "waterbill",
        label: "Water bill",
        img: IoWaterOutline
    },
    {
        id: "65b45d96c06aa8dfa60a5258",
        name: "internetbill",
        label: "Internet bill",
        img: IoWifi
    },
    {
        id: "65b45e28c06aa8dfa60a5259",
        name: "salary",
        label: "Salary",
        img: FaRegMoneyBillAlt
    },
    {
        id: "65b45e5fc06aa8dfa60a525a",
        name: "phonebill",
        label: "Phone bill",
        img: CiMobile1
    }
]

const transactionType = [
    {
        id: "65b45e8ac06aa8dfa60a525b",
        type: "expense",
        label: "Expense"
    },
    {
        id: "65b45eb1c06aa8dfa60a525c",
        type: "income",
        label: "Income"
    }
]

const transactions = [
    {
        id: 1,
        categoryId: "65b45ca6c06aa8dfa60a5256",
        createdAt: "March 10, 2023",
        amount: 300000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
    {
        id: 2,
        categoryId: "65b45d1dc06aa8dfa60a5257",
        createdAt: "March 12, 2023",
        amount: 120000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
    {
        id: 3,
        categoryId: "65b45d96c06aa8dfa60a5258",
        createdAt: "March 14, 2023",
        amount: 230000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
    {
        id: 4,
        categoryId: "65b45e28c06aa8dfa60a5259",
        createdAt: "March 20, 2023",
        amount: 5750000,
        typeId: "65b45eb1c06aa8dfa60a525c"
    },
    {
        id: 5,
        categoryId: "65b45e5fc06aa8dfa60a525a",
        createdAt: "March 20, 2023",
        amount: 23000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
];

const columns = [
    {
        name: "Name",
        uid: "name",
    },
    {
        name: "Created at",
        uid: "createdAt",
    },
    {
        name: "Amount",
        uid: "amount",
    },
    {
        name: "Actions",
        uid: "actions",
    },
];


const reservationsForecast = [
    {
        date: "01-Feb-2020",
        total_occ: 166,
        arr_rooms: 109,
        dep_rooms: 66,
        room_revenue: 11396,
        average_rate: 69,
        day_use_rooms: 2,
        no_show_rooms: 0,
        adlandchl: 303
    },
    {
        date: "02-Feb-2020",
        total_occ: 172,
        arr_rooms: 91,
        dep_rooms: 85,
        room_revenue: 11786,
        average_rate: 69,
        day_use_rooms: 2,
        no_show_rooms: 0,
        adlandchl: 283
    },
    {
        date: "03-Feb-2020",
        total_occ: 132,
        arr_rooms: 77,
        dep_rooms: 117,
        room_revenue: 7260,
        average_rate: 55,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 190
    },
    {
        date: "04-Feb-2020",
        total_occ: 118,
        arr_rooms: 56,
        dep_rooms: 70,
        room_revenue: 6208,
        average_rate: 53,
        day_use_rooms: 4,
        no_show_rooms: 0,
        adlandchl: 172
    },
    {
        date: "05-Feb-2020",
        total_occ: 103,
        arr_rooms: 75,
        dep_rooms: 90,
        room_revenue: 6208,
        average_rate: 60,
        day_use_rooms: 8,
        no_show_rooms: 0,
        adlandchl: 152
    },
    {
        date: "06-Feb-2020",
        total_occ: 100,
        arr_rooms: 54,
        dep_rooms: 57,
        room_revenue: 5399,
        average_rate: 54,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 144
    },
    {
        date: "07-Feb-2020",
        total_occ: 116,
        arr_rooms: 58,
        dep_rooms: 42,
        room_revenue: 6193,
        average_rate: 53,
        day_use_rooms: 3,
        no_show_rooms: 0,
        adlandchl: 179
    },
    {
        date: "08-Feb-2020",
        total_occ: 112,
        arr_rooms: 80,
        dep_rooms: 84,
        room_revenue: 5536,
        average_rate: 49,
        day_use_rooms: 0,
        no_show_rooms: 1,
        adlandchl: 173
    },
    {
        date: "09-Feb-2020",
        total_occ: 94,
        arr_rooms: 46,
        dep_rooms: 64,
        room_revenue: 4975,
        average_rate: 53,
        day_use_rooms: 4,
        no_show_rooms: 0,
        adlandchl: 130
    },
    {
        date: "10-Feb-2020",
        total_occ: 88,
        arr_rooms: 42,
        dep_rooms: 48,
        room_revenue: 4566,
        average_rate: 52,
        day_use_rooms: 1,
        no_show_rooms: 0,
        adlandchl: 121
    },
    {
        date: "11-Feb-2020",
        total_occ: 104,
        arr_rooms: 61,
        dep_rooms: 45,
        room_revenue: 5706,
        average_rate: 55,
        day_use_rooms: 1,
        no_show_rooms: 1,
        adlandchl: 151
    },
    {
        date: "12-Feb-2020",
        total_occ: 122,
        arr_rooms: 77,
        dep_rooms: 59,
        room_revenue: 6359,
        average_rate: 52,
        day_use_rooms: 1,
        no_show_rooms: 1,
        adlandchl: 180
    },
    {
        date: "13-Feb-2020",
        total_occ: 136,
        arr_rooms: 80,
        dep_rooms: 66,
        room_revenue: 6830,
        average_rate: 50,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 206
    },
    {
        date: "14-Feb-2020",
        total_occ: 139,
        arr_rooms: 88,
        dep_rooms: 85,
        room_revenue: 7242,
        average_rate: 52,
        day_use_rooms: 2,
        no_show_rooms: 4,
        adlandchl: 213
    },
    {
        date: "15-Feb-2020",
        total_occ: 439,
        arr_rooms: 412,
        dep_rooms: 111,
        room_revenue: 23903,
        average_rate: 54,
        day_use_rooms: 18,
        no_show_rooms: 0,
        adlandchl: 794
    },
    {
        date: "16-Feb-2020",
        total_occ: 377,
        arr_rooms: 46,
        dep_rooms: 108,
        room_revenue: 20117,
        average_rate: 53,
        day_use_rooms: 1,
        no_show_rooms: 2,
        adlandchl: 677
    },
    {
        date: "17-Feb-2020",
        total_occ: 357,
        arr_rooms: 41,
        dep_rooms: 61,
        room_revenue: 19177,
        average_rate: 54,
        day_use_rooms: 1,
        no_show_rooms: 0,
        adlandchl: 648
    },
    {
        date: "18-Feb-2020",
        total_occ: 330,
        arr_rooms: 21,
        dep_rooms: 48,
        room_revenue: 19094,
        average_rate: 58,
        day_use_rooms: 2,
        no_show_rooms: 0,
        adlandchl: 609
    },
    {
        date: "19-Feb-2020",
        total_occ: 403,
        arr_rooms: 167,
        dep_rooms: 94,
        room_revenue: 24392,
        average_rate: 61,
        day_use_rooms: 0,
        no_show_rooms: 2,
        adlandchl: 698
    },
    {
        date: "20-Feb-2020",
        total_occ: 166,
        arr_rooms: 31,
        dep_rooms: 267,
        room_revenue: 11786,
        average_rate: 71,
        day_use_rooms: 0,
        no_show_rooms: 3,
        adlandchl: 275
    },
    {
        date: "21-Feb-2020",
        total_occ: 115,
        arr_rooms: 54,
        dep_rooms: 105,
        room_revenue: 10154,
        average_rate: 88,
        day_use_rooms: 7,
        no_show_rooms: 1,
        adlandchl: 179
    },
    {
        date: "22-Feb-2020",
        total_occ: 80,
        arr_rooms: 32,
        dep_rooms: 67,
        room_revenue: 5406,
        average_rate: 68,
        day_use_rooms: 1,
        no_show_rooms: 0,
        adlandchl: 134
    },
    {
        date: "23-Feb-2020",
        total_occ: 56,
        arr_rooms: 17,
        dep_rooms: 41,
        room_revenue: 3869,
        average_rate: 69,
        day_use_rooms: 1,
        no_show_rooms: 1,
        adlandchl: 84
    },
    {
        date: "24-Feb-2020",
        total_occ: 46,
        arr_rooms: 17,
        dep_rooms: 27,
        room_revenue: 895,
        average_rate: 19,
        day_use_rooms: 3,
        no_show_rooms: 0,
        adlandchl: 65
    },
    {
        date: "25-Feb-2020",
        total_occ: 43,
        arr_rooms: 8,
        dep_rooms: 11,
        room_revenue: 2226,
        average_rate: 52,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 57
    },
    {
        date: "26-Feb-2020",
        total_occ: 79,
        arr_rooms: 43,
        dep_rooms: 7,
        room_revenue: 3901,
        average_rate: 49,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 120
    },
    {
        date: "27-Feb-2020",
        total_occ: 44,
        arr_rooms: 1,
        dep_rooms: 46,
        room_revenue: 2039,
        average_rate: 46,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 56
    },
    {
        date: "28-Feb-2020",
        total_occ: 44,
        arr_rooms: 11,
        dep_rooms: 5,
        room_revenue: 2053,
        average_rate: 47,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 57
    },
    {
        date: "29-Feb-2020",
        total_occ: 27,
        arr_rooms: 3,
        dep_rooms: 18,
        room_revenue: 987,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 37
    },
    {
        date: "01-Mar-2020",
        total_occ: 47,
        arr_rooms: 2,
        dep_rooms: 5,
        room_revenue: 1696,
        average_rate: 36,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 56
    },
    {
        date: "02-Mar-2020",
        total_occ: 49,
        arr_rooms: 3,
        dep_rooms: 5,
        room_revenue: 2139,
        average_rate: 44,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 58
    },
    {
        date: "03-Mar-2020",
        total_occ: 56,
        arr_rooms: 4,
        dep_rooms: 0,
        room_revenue: 2483,
        average_rate: 44,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 68
    },
    {
        date: "04-Mar-2020",
        total_occ: 44,
        arr_rooms: 0,
        dep_rooms: 3,
        room_revenue: 1661,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 53
    },
    {
        date: "05-Mar-2020",
        total_occ: 34,
        arr_rooms: 1,
        dep_rooms: 3,
        room_revenue: 1147,
        average_rate: 34,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 42
    },
    {
        date: "06-Mar-2020",
        total_occ: 38,
        arr_rooms: 2,
        dep_rooms: 2,
        room_revenue: 1366,
        average_rate: 36,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 45
    },
    {
        date: "07-Mar-2020",
        total_occ: 37,
        arr_rooms: 3,
        dep_rooms: 2,
        room_revenue: 1378,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 46
    },
    {
        date: "08-Mar-2020",
        total_occ: 37,
        arr_rooms: 4,
        dep_rooms: 2,
        room_revenue: 1444,
        average_rate: 39,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 48
    },
    {
        date: "09-Mar-2020",
        total_occ: 37,
        arr_rooms: 3,
        dep_rooms: 6,
        room_revenue: 1588,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 45
    },
    {
        date: "10-Mar-2020",
        total_occ: 37,
        arr_rooms: 5,
        dep_rooms: 2,
        room_revenue: 1765,
        average_rate: 48,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 46
    },
    {
        date: "11-Mar-2020",
        total_occ: 46,
        arr_rooms: 1,
        dep_rooms: 4,
        room_revenue: 2103,
        average_rate: 46,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 49
    },
    {
        date: "12-Mar-2020",
        total_occ: 36,
        arr_rooms: 0,
        dep_rooms: 6,
        room_revenue: 1536,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 36
    },
    {
        date: "13-Mar-2020",
        total_occ: 46,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 1680,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 46
    },
    {
        date: "14-Mar-2020",
        total_occ: 30,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1007,
        average_rate: 34,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 30
    },
    {
        date: "15-Mar-2020",
        total_occ: 33,
        arr_rooms: 1,
        dep_rooms: 1,
        room_revenue: 1323,
        average_rate: 40,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 34
    },
    {
        date: "16-Mar-2020",
        total_occ: 40,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 1597,
        average_rate: 40,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 40
    },
    {
        date: "17-Mar-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 880,
        average_rate: 34,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "18-Mar-2020",
        total_occ: 40,
        arr_rooms: 9,
        dep_rooms: 0,
        room_revenue: 1735,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 47
    },
    {
        date: "19-Mar-2020",
        total_occ: 48,
        arr_rooms: 1,
        dep_rooms: 1,
        room_revenue: 2231,
        average_rate: 46,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 56
    },
    {
        date: "20-Mar-2020",
        total_occ: 76,
        arr_rooms: 3,
        dep_rooms: 1,
        room_revenue: 3666,
        average_rate: 48,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 85
    },
    {
        date: "21-Mar-2020",
        total_occ: 37,
        arr_rooms: 1,
        dep_rooms: 2,
        room_revenue: 1613,
        average_rate: 44,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 47
    },
    {
        date: "22-Mar-2020",
        total_occ: 28,
        arr_rooms: 2,
        dep_rooms: 10,
        room_revenue: 962,
        average_rate: 34,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 29
    },
    {
        date: "23-Mar-2020",
        total_occ: 57,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 2798,
        average_rate: 49,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 58
    },
    {
        date: "24-Mar-2020",
        total_occ: 227,
        arr_rooms: 1,
        dep_rooms: 1,
        room_revenue: 15304,
        average_rate: 67,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 227
    },
    {
        date: "25-Mar-2020",
        total_occ: 55,
        arr_rooms: 2,
        dep_rooms: 2,
        room_revenue: 2450,
        average_rate: 45,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 56
    },
    {
        date: "26-Mar-2020",
        total_occ: 44,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 1695,
        average_rate: 39,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 44
    },
    {
        date: "27-Mar-2020",
        total_occ: 37,
        arr_rooms: 2,
        dep_rooms: 1,
        room_revenue: 1429,
        average_rate: 39,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 38
    },
    {
        date: "28-Mar-2020",
        total_occ: 31,
        arr_rooms: 0,
        dep_rooms: 2,
        room_revenue: 1126,
        average_rate: 36,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 31
    },
    {
        date: "29-Mar-2020",
        total_occ: 44,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1928,
        average_rate: 44,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 44
    },
    {
        date: "30-Mar-2020",
        total_occ: 50,
        arr_rooms: 2,
        dep_rooms: 0,
        room_revenue: 3767,
        average_rate: 75,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 52
    },
    {
        date: "31-Mar-2020",
        total_occ: 43,
        arr_rooms: 0,
        dep_rooms: 2,
        room_revenue: 1885,
        average_rate: 44,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 43
    },
    {
        date: "01-Apr-2020",
        total_occ: 31,
        arr_rooms: 1,
        dep_rooms: 0,
        room_revenue: 1140,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 32
    },
    {
        date: "02-Apr-2020",
        total_occ: 36,
        arr_rooms: 1,
        dep_rooms: 1,
        room_revenue: 1536,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 36
    },
    {
        date: "03-Apr-2020",
        total_occ: 34,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1240,
        average_rate: 36,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 34
    },
    {
        date: "04-Apr-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 903,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "05-Apr-2020",
        total_occ: 26,
        arr_rooms: 1,
        dep_rooms: 1,
        room_revenue: 902,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 27
    },
    {
        date: "06-Apr-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 902,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 27
    },
    {
        date: "07-Apr-2020",
        total_occ: 25,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 844,
        average_rate: 34,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 25
    },
    {
        date: "08-Apr-2020",
        total_occ: 46,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 2152,
        average_rate: 47,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 46
    },
    {
        date: "09-Apr-2020",
        total_occ: 24,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 844,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 24
    },
    {
        date: "10-Apr-2020",
        total_occ: 30,
        arr_rooms: 1,
        dep_rooms: 0,
        room_revenue: 1113,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 31
    },
    {
        date: "11-Apr-2020",
        total_occ: 33,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1239,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 34
    },
    {
        date: "12-Apr-2020",
        total_occ: 25,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 902,
        average_rate: 36,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "13-Apr-2020",
        total_occ: 41,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 1920,
        average_rate: 47,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 41
    },
    {
        date: "14-Apr-2020",
        total_occ: 43,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1349,
        average_rate: 31,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 43
    },
    {
        date: "15-Apr-2020",
        total_occ: 37,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1612,
        average_rate: 44,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 37
    },
    {
        date: "16-Apr-2020",
        total_occ: 24,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 844,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 24
    },
    {
        date: "17-Apr-2020",
        total_occ: 29,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1054,
        average_rate: 36,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 29
    },
    {
        date: "18-Apr-2020",
        total_occ: 26,
        arr_rooms: 2,
        dep_rooms: 0,
        room_revenue: 978,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 29
    },
    {
        date: "19-Apr-2020",
        total_occ: 26,
        arr_rooms: 2,
        dep_rooms: 2,
        room_revenue: 953,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 28
    },
    {
        date: "20-Apr-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 953,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 28
    },
    {
        date: "21-Apr-2020",
        total_occ: 24,
        arr_rooms: 0,
        dep_rooms: 2,
        room_revenue: 844,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 24
    },
    {
        date: "22-Apr-2020",
        total_occ: 62,
        arr_rooms: 1,
        dep_rooms: 1,
        room_revenue: 2005,
        average_rate: 32,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 62
    },
    {
        date: "23-Apr-2020",
        total_occ: 51,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 2448,
        average_rate: 48,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 51
    },
    {
        date: "24-Apr-2020",
        total_occ: 24,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 845,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 24
    },
    {
        date: "25-Apr-2020",
        total_occ: 36,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1350,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 36
    },
    {
        date: "26-Apr-2020",
        total_occ: 29,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1055,
        average_rate: 36,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 29
    },
    {
        date: "27-Apr-2020",
        total_occ: 32,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1181,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 32
    },
    {
        date: "28-Apr-2020",
        total_occ: 32,
        arr_rooms: 3,
        dep_rooms: 0,
        room_revenue: 1220,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 35
    },
    {
        date: "29-Apr-2020",
        total_occ: 54,
        arr_rooms: 2,
        dep_rooms: 0,
        room_revenue: 2708,
        average_rate: 50,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 59
    },
    {
        date: "30-Apr-2020",
        total_occ: 49,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 2277,
        average_rate: 46,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 54
    },
    {
        date: "01-May-2020",
        total_occ: 37,
        arr_rooms: 0,
        dep_rooms: 4,
        room_revenue: 1454,
        average_rate: 39,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 38
    },
    {
        date: "02-May-2020",
        total_occ: 41,
        arr_rooms: 1,
        dep_rooms: 2,
        room_revenue: 1602,
        average_rate: 39,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 42
    },
    {
        date: "03-May-2020",
        total_occ: 35,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 1320,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 35
    },
    {
        date: "04-May-2020",
        total_occ: 38,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1566,
        average_rate: 41,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 38
    },
    {
        date: "05-May-2020",
        total_occ: 54,
        arr_rooms: 4,
        dep_rooms: 0,
        room_revenue: 2545,
        average_rate: 47,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 54
    },
    {
        date: "06-May-2020",
        total_occ: 60,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 2899,
        average_rate: 48,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 60
    },
    {
        date: "07-May-2020",
        total_occ: 34,
        arr_rooms: 2,
        dep_rooms: 0,
        room_revenue: 1609,
        average_rate: 47,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 36
    },
    {
        date: "08-May-2020",
        total_occ: 36,
        arr_rooms: 2,
        dep_rooms: 3,
        room_revenue: 1739,
        average_rate: 48,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 38
    },
    {
        date: "09-May-2020",
        total_occ: 33,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1613,
        average_rate: 49,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 35
    },
    {
        date: "10-May-2020",
        total_occ: 22,
        arr_rooms: 0,
        dep_rooms: 6,
        room_revenue: 815,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 22
    },
    {
        date: "11-May-2020",
        total_occ: 29,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1229,
        average_rate: 42,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 29
    },
    {
        date: "12-May-2020",
        total_occ: 29,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1229,
        average_rate: 42,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 29
    },
    {
        date: "13-May-2020",
        total_occ: 22,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 815,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 22
    },
    {
        date: "14-May-2020",
        total_occ: 40,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1794,
        average_rate: 45,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 40
    },
    {
        date: "15-May-2020",
        total_occ: 22,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 815,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 22
    },
    {
        date: "16-May-2020",
        total_occ: 22,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 815,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 22
    },
    {
        date: "17-May-2020",
        total_occ: 22,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 815,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 22
    },
    {
        date: "18-May-2020",
        total_occ: 22,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 815,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 22
    },
    {
        date: "19-May-2020",
        total_occ: 22,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 815,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 22
    },
    {
        date: "20-May-2020",
        total_occ: 30,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1152,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 30
    },
    {
        date: "21-May-2020",
        total_occ: 27,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1026,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 27
    },
    {
        date: "22-May-2020",
        total_occ: 23,
        arr_rooms: 2,
        dep_rooms: 1,
        room_revenue: 897,
        average_rate: 39,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 25
    },
    {
        date: "23-May-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 2,
        room_revenue: 999,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "24-May-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 788,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "25-May-2020",
        total_occ: 28,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1202,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 28
    },
    {
        date: "26-May-2020",
        total_occ: 28,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1202,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 28
    },
    {
        date: "27-May-2020",
        total_occ: 34,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1611,
        average_rate: 47,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 34
    },
    {
        date: "28-May-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 999,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "29-May-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 788,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "30-May-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 788,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "31-May-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 787,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "01-Jun-2020",
        total_occ: 28,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1203,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 28
    },
    {
        date: "02-Jun-2020",
        total_occ: 28,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1203,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 28
    },
    {
        date: "03-Jun-2020",
        total_occ: 34,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1558,
        average_rate: 46,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 34
    },
    {
        date: "04-Jun-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1000,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "05-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "06-Jun-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1000,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "07-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "08-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "09-Jun-2020",
        total_occ: 54,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 15,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 54
    },
    {
        date: "10-Jun-2020",
        total_occ: 67,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1558,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 67
    },
    {
        date: "11-Jun-2020",
        total_occ: 59,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1000,
        average_rate: 17,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 59
    },
    {
        date: "12-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "13-Jun-2020",
        total_occ: 26,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1000,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 26
    },
    {
        date: "14-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "15-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "16-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "17-Jun-2020",
        total_occ: 39,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1768,
        average_rate: 45,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 39
    },
    {
        date: "18-Jun-2020",
        total_occ: 46,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 2266,
        average_rate: 49,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 46
    },
    {
        date: "19-Jun-2020",
        total_occ: 21,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 790,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "20-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "21-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "22-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "23-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "24-Jun-2020",
        total_occ: 17,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 926,
        average_rate: 54,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 17
    },
    {
        date: "25-Jun-2020",
        total_occ: 9,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 313,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 9
    },
    {
        date: "26-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "27-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "28-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "29-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "30-Jun-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 103,
        average_rate: 26,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "01-Jul-2020",
        total_occ: 29,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1375,
        average_rate: 47,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 29
    },
    {
        date: "02-Jul-2020",
        total_occ: 10,
        arr_rooms: 1,
        dep_rooms: 0,
        room_revenue: 377,
        average_rate: 38,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 11
    },
    {
        date: "03-Jul-2020",
        total_occ: 4,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 101,
        average_rate: 25,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 4
    },
    {
        date: "04-Jul-2020",
        total_occ: 11,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 101,
        average_rate: 9,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 11
    },
    {
        date: "05-Jul-2020",
        total_occ: 5,
        arr_rooms: 1,
        dep_rooms: 0,
        room_revenue: 214,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 6
    },
    {
        date: "06-Jul-2020",
        total_occ: 5,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 214,
        average_rate: 43,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 6
    },
    {
        date: "07-Jul-2020",
        total_occ: 7,
        arr_rooms: 2,
        dep_rooms: 0,
        room_revenue: 306,
        average_rate: 44,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 10
    },
    {
        date: "08-Jul-2020",
        total_occ: 19,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 961,
        average_rate: 51,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 21
    },
    {
        date: "09-Jul-2020",
        total_occ: 5,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 161,
        average_rate: 32,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 7
    },
    {
        date: "10-Jul-2020",
        total_occ: 5,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 161,
        average_rate: 32,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 7
    },
    {
        date: "11-Jul-2020",
        total_occ: 10,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 372,
        average_rate: 37,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 12
    },
    {
        date: "12-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 2,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "13-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "14-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "15-Jul-2020",
        total_occ: 28,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1342,
        average_rate: 48,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 28
    },
    {
        date: "16-Jul-2020",
        total_occ: 23,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 1335,
        average_rate: 58,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 23
    },
    {
        date: "17-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "18-Jul-2020",
        total_occ: 8,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 280,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 8
    },
    {
        date: "19-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "20-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "21-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "22-Jul-2020",
        total_occ: 16,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 892,
        average_rate: 56,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 16
    },
    {
        date: "23-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "24-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "25-Jul-2020",
        total_occ: 8,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 280,
        average_rate: 35,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 8
    },
    {
        date: "26-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    },
    {
        date: "27-Jul-2020",
        total_occ: 106,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 12945,
        average_rate: 122,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 106
    },
    {
        date: "28-Jul-2020",
        total_occ: 106,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 12945,
        average_rate: 122,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 106
    },
    {
        date: "29-Jul-2020",
        total_occ: 120,
        arr_rooms: 1,
        dep_rooms: 0,
        room_revenue: 13801,
        average_rate: 115,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 121
    },
    {
        date: "30-Jul-2020",
        total_occ: 106,
        arr_rooms: 0,
        dep_rooms: 1,
        room_revenue: 12945,
        average_rate: 122,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 106
    },
    {
        date: "31-Jul-2020",
        total_occ: 3,
        arr_rooms: 0,
        dep_rooms: 0,
        room_revenue: 69,
        average_rate: 23,
        day_use_rooms: 0,
        no_show_rooms: 0,
        adlandchl: 3
    }
];

const timeForecasts = [
    {
        id: 1,
        name: "thismonth",
        display: "This month"
    },
    {
        id: 2,
        name: "threemonth",
        display: "3 months"
    },
    {
        id: 3,
        name: "sixmonth",
        display: "6 months"
    },
]

const forecastOptions = [
    {
        id: 1,
        name: "total_occ",
        display: "Total Occ"
    },
    {
        id: 2,
        name: "arr_rooms",
        display: "Arr rooms"
    },
    {
        id: 3,
        name: "dep_rooms",
        display: "Dep rooms"
    },
]

const dashboardSampleV0_4MealDetailData = [
    {
        report_date: '2024-02-23',
        total: {
            total_actual: {
                count: 18,
                percentage_count: 100,
                sales: 7750000,
                percentage_sales: 100
            },
            adults_actual: {
                count: 16,
                percentage_count: 89,
                sales: 7750000,
                percentage_sales: 100
            },
            children_actual: {
                count: 2,
                percentage_count: 11,
                sales: 0,
                percentage_sales: 0
            }
        },
        outlet: [
            {
                outlet_code: 'FLA',
                outlet_name: 'Flavours Restaurant',
                total: {
                    total_actual: {
                        count: 1,
                        percentage_count: 6,
                        sales: 0,
                        percentage_sales: 0
                    },
                    adults_actual: {
                        count: 1,
                        percentage_count: 0,
                        sales: 0,
                        percentage_sales: 0
                    },
                    children_actual: {
                        count: 0,
                        percentage_count: 0,
                        sales: 0,
                        percentage_sales: 0
                    }
                },
                breakfast: {
                    total: {
                        total_actual: {
                            count: 1,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        adults_actual: {
                            count: 1,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        children_actual: {
                            count: 1,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        }
                    },
                    records: {
                        '15:41:19': {
                            room: '1001',
                            guest_names: 'Nguyen Hoang Long',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        },
                        '15:41:20': {
                            room: '1001',
                            guest_names: 'Nguyen Hoang Long',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        }
                    }
                },
                lunch: {
                    total: {
                        total_actual: {
                            count: 2,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        adults_actual: {
                            count: 2,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        children_actual: {
                            count: 2,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        }
                    },
                    records: {
                        '16:41:19': {
                            room: '1002',
                            guest_names: 'Phan Le Minh An',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        },
                        '16:41:20': {
                            room: '1002',
                            guest_names: 'Phan Le Minh An',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        }
                    }
                },
                dinner: {
                    total: {
                        total_actual: {
                            count: 3,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        adults_actual: {
                            count: 3,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        children_actual: {
                            count: 3,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        }
                    },
                    records: {
                        '12:41:19': {
                            room: '1003',
                            guest_names: 'Tien Len',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        },
                        '12:41:20': {
                            room: '1003',
                            guest_names: 'Tien Len',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        }
                    }
                }
            }
        ]
    }
];

const properties = [
    {
        id: 1,
        cluster: "Master",
        property_code: "ALL",
        property_name: "Sokha Hotels & Resorts"
    },
    {
        id: 2,
        cluster: "Phnom Penh",
        property_code: "SPH",
        property_name: "Sokha Phnom Penh Hotel"
    },
    {
        id: 3,
        cluster: "Phnom Penh",
        property_code: "PP02",
        property_name: "Sokha Phnom Penh Residence"
    },
    {
        id: 4,
        cluster: "Siem Reap",
        property_code: "SR01",
        property_name: "Sokha Angkor Resort (Luxury)"
    },
    {
        id: 5,
        cluster: "Siem Reap",
        property_code: "SR02",
        property_name: "Sokha Siem Reap Resort & Convention Center"
    },
    {
        id: 6,
        cluster: "Siem Reap",
        property_code: "SR03",
        property_name: "Sokha Palace Siem Reap Hotel (Comfort)"
    },
    {
        id: 7,
        cluster: "Siem Reap",
        property_code: "SR04",
        property_name: "Sokha Private Mansion (Villas)"
    },
    {
        id: 7,
        cluster: "Sihanoukville",
        property_code: "SV01",
        property_name: "Sokha Beach Resort"
    },
    {
        id: 7,
        cluster: "Sihanoukville",
        property_code: "SV02",
        property_name: "Sokha Bayview by Sokha Beach Resort"
    },
    {
        id: 8,
        cluster: "Sihanoukville",
        property_code: "SV03",
        property_name: "Lakeside by Sokha Beach Resort"
    },
    {
        id: 9,
        cluster: "Sihanoukville",
        property_code: "SV04",
        property_name: "Moha Mohori by Sokha Beach Resort"
    },
    {
        id: 10,
        cluster: "Kampot",
        property_code: "KP01",
        property_name: "Thansur Sokha Hotel"
    },
    {
        id: 11,
        cluster: "Kampot",
        property_code: "KP02",
        property_name: "Le Bokor Palace"
    }
]

const reveunues: IRevenue[] = [
    {
        id: 1,
        property_id: 1,
        total_room: 755,
        room_revenue: 243458.7,
        f_and_b_revenue: 720316.22,
        other_revenue: 53647.3,
        total_revenue: 1017422.22
    },
    {
        id: 2,
        property_id: 2,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 79316.22,
        other_revenue: 51547.3,
        total_revenue: 365322.22
    },
    {
        id: 3,
        property_id: 3,
        total_room: 724,
        room_revenue: 234358.7,
        f_and_b_revenue: 419316.22,
        other_revenue: 21547.3,
        total_revenue: 675222.22
    },
    {
        id: 4,
        property_id: 4,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    {
        id: 5,
        property_id: 5,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    {
        id: 6,
        property_id: 6,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    {
        id: 7,
        property_id: 7,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    {
        id: 8,
        property_id: 8,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    {
        id: 9,
        property_id: 9,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    {
        id: 10,
        property_id: 10,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    {
        id: 11,
        property_id: 11,
        total_room: 744,
        room_revenue: 234458.7,
        f_and_b_revenue: 619316.22,
        other_revenue: 51547.3,
        total_revenue: 895322.22
    },
    
]

export default {
    menuList,
    transactions,
    columns,
    transactionType,
    transactionCategory,
    timeForecasts,
    reservationsForecast,
    forecastOptions,
    dashboardSampleV0_4MealDetailData,
    users,
    properties,
    reveunues
}