import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesApp from './configs/route'
import {NextUIProvider} from "@nextui-org/react";
import {BaseProvider, LightTheme} from 'baseui';

function App() {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <BaseProvider theme={LightTheme}>
                    <RoutesApp />
                </BaseProvider>
            </NextUIProvider>
        </BrowserRouter>
    )
}

export default App
