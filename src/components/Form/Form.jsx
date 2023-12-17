import React, {useEffect, useState} from "react";
import "./Form.css";
import {useTelegram} from "../../hooks/useTelegram";
const Form = () => {
    const [personWeight, setPersonWeight] = useState();
    const [personHeight, setPersonHeight] = useState();
    const [personDiet, setPersonDiet] = useState("normal");
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);
    useEffect(() => {
        if(!personHeight || !personWeight) {
            tg.MainButton.hide();
        }else {
            tg.MainButton.show();
        }
    }, [personWeight,personHeight])
    const onChangePersonWeight = (e) => {
        setPersonWeight(e.target.value)
    }
    const onChangePersonHeight = (e) => {
        setPersonHeight(e.target.value)
    }
    const onChangePersonDiet = (e) => {
        setPersonDiet(e.target.value)
    }
    return (
        <div className={"form"}>
            <h3>Введите ваши биометрические данные</h3>
            <input
                type="number"
                className="personWeight"
                value={personWeight}
                onChange={onChangePersonWeight}
                placeholder={'Введите ваш текущий вес'}/>
            <input
                type="number"
                className="personHeight"
                value={personHeight}
                onChange={onChangePersonHeight}
                placeholder={'Введите ваш текущий рост'}/>
            <select value={personDiet} onChange={onChangePersonDiet}>
                <option value={'normal'}>Поддержание баланса витаминов и минералов</option>
                <option value={'loss'}>Похудение</option>
                <option value={'massive'}>Набор мышеченой массы</option>
                <option value={'off'}>Не нужно</option>

            </select>
        </div>

    );
};

export default Form;