import _ from 'lodash'
import $ from 'jquery'
import {ui} from './ui.js'

ui()

const oDiv = $('<div>')
oDiv.html(_.join(['aaa', 'bbb', 'ccc'], '-'))
$(document.body).append(oDiv)