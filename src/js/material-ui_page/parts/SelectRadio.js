import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';

export default (props) => {
    console.log("=== SelectRadio ===");

    // ボタン選択状態
    const [condition, setCondition] = useState('');

    const handleRadioSelect = (e) => {
        console.log(e.target.value);
        setCondition(e.target.value);
    };

    // Radioボタンの定義、レイアウト定義は記載しない
    const RadioMain = () => {
        const ALL_USER = ["all", "全員"];
        const ONE_USER = ["person", "一人"];
        return (
            <>
                <FormControlLabel
                    value={ALL_USER[0]}
                    control={
                        <Radio
                            onChange={handleRadioSelect}
                            checked={condition === ALL_USER[0]}
                        />}
                    label={ALL_USER[1]} />
                <FormControlLabel
                    value={ONE_USER[0]}
                    control={
                        <Radio
                            onChange={handleRadioSelect}
                            checked={condition === ONE_USER[0]}
                        />}
                    label={ONE_USER[1]} />
            </>
        )
    }


    // rowの有無で縦と横に並びが変わる
    if (props.vertical === true) {
        return (
            <>
                <FormControl component="fieldset">
                    <RadioGroup name="data">
                        <RadioMain />
                    </RadioGroup>
                </FormControl>
            </>
        );

    } else {
        return (
            <>
                <FormControl component="fieldset">
                    <RadioGroup row name="data">
                        <RadioMain />
                    </RadioGroup>
                </FormControl>
            </>
        );

    }
}