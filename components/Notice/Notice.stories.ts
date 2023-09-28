import { Meta, StoryObj } from "@storybook/react";
import { Notice, NoticeProps } from "./Notice";



const meta:Meta<NoticeProps> = {
    title: 'Atoms/Notice',
    component: Notice,

}

export default meta

function onClose () {
    alert('fechei')
}

export const Primary: StoryObj<NoticeProps> = {
    args: {
        type: 'choose',
        message: 'Atualiazado com sucesso',
        children: 'robo time',
        onClose: onClose
    }
}

export const Success: StoryObj<NoticeProps> = {
    args: {
        type: 'success',
        message: 'Atualiazado com sucesso',
        children: 'robo time',
        onClose: onClose
    }
}

export const Alert: StoryObj<NoticeProps> = {
    args: {
        type: 'alert',
        message: 'Log não realizado',
        children: 'robo time',
        onClose: onClose
    }
}

export const Error: StoryObj<NoticeProps> = {
    args: {
        type: 'error',
        message: 'Erro ao atualiazar',
        children: 'robo time',
        onClose: onClose
    }
}