import React, { useState } from 'react';
import moment from 'moment-timezone';
import Button from '@material-ui/core/Button';

export default (props) => {
    console.log("=== MomentSample ===");

    const dummy = () => {
        var now = moment();
        console.log(now.toDate()); // Dateオブジェクトが返される

        // 文字列からも生成できるし
        var shougatsu = moment('2015-01-01');
        console.log(shougatsu.toString()); // "Thu Jan 01 2015 00:00:00 GMT+0900"

        // もちろんDateオブジェクトからも生成できる
        var kodomonohi = moment(new Date('2015-05-05'));
        console.log(kodomonohi.toString()); // "Tue May 05 2015 09:00:00 GMT+0900"

    }

    // momentの使い方
    const dummy2 = () => {
        console.log('--- default Timezone ');
        // UTC時刻 format:ISO 8601表示
        console.log(moment.tz().format());

        console.log('--- Asia/Tokyo Timezone ');
        // JST時刻
        console.log(moment.tz("Asia/Tokyo").format());

        // フォーマット指定
        console.log(moment.tz("Asia/Tokyo").format("YYYY-MM-DD"));

        // ISO 8601拡張フォーマット(YYYY-MM-DDTHH:mm:ss.sssZ)
        console.log('ISO8601 ex: ' + moment.tz("Asia/Tokyo").toISOString());

        // unixタイムスタンプ
        var unixtime = moment.tz("Asia/Tokyo").unix();
        console.log('unixtime: ' + unixtime);

        // unixタイムスタンプ->ISO8601
        var formattime = moment(unixtime, "X").tz("Asia/Tokyo").format();
        console.log('unix to ISO8601: ' + formattime);

        // 日付指定
        var start = moment.tz('2020-08-10 12:34:56', 'Asia/Tokyo').format();

        // 配列で日付指定可能、注意点として月は0開始（文字列でも同様にパースされる）
        start = moment.tz([2020, 8, 10], 'Asia/Tokyo').format();
        start = moment.tz([2020, 0, 1], 'Asia/Tokyo').format();
        // start = moment.tz(['2020', '08', '10', '12', '34', '56'], 'Asia/Tokyo').format();
        console.log(start);
    }

    const handleClicked = () => {
        alert('abcde');
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={dummy}>Primary</Button>
            <Button variant="contained" color="secondary" onClick={dummy2}>Secondary</Button>
        </>
    );
}

