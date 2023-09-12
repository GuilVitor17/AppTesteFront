import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import AppCaixa from '../../components/polidromos';
import Troco from '../../components/CaixaTroco';
import AppCeps from '../../components/appCeps';
import AppVeiculoss from '../../components/veiculos';
import AppOptions from '../../components/options';



function RoutesPages() {


    return (
        <div className="routes">

            <Routes>

                <Route path="/" element={<AppOptions />} />
                <Route path="/appceps" element={<AppCeps/>} />
                <Route path="/caixatroco" element={<Troco />} />
                <Route path="/polidromos" element={<AppCaixa />} />
                <Route path="/veiculos" element={<AppVeiculoss />} />

            </Routes>



        </div>
    );
}

export default RoutesPages;
