import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);

class EditorPane extends Component {

    editor = null // editor ref
    CodeMirror = null // CodeMirro instance
    
    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editor, {
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true
        });
    }

    componentDidMount() {
        this.initializeEditor();
    }

    render() {
        return (
            <div className={cx('editor-pane')}>
                <input
                    className={cx('title')}
                    placeholder="Enter your title"
                    name="title" />
                <div className={cx('code-editor')} ref={ref => this.editor=ref}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>TAG</div>
                    <input
                        name="tags"
                        placeholder="Enter tags." />
                </div>
            </div>
        );
    }
}

export default EditorPane;