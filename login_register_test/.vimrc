 set nocompatible
 set fileformats=unix,dos,mac

 syntax on
 filetype on

 set rtp+=~/.vim/bundle/vundle          " without .git
 call vundle#rc()

 Bundle 'gmarik/vundle'
 Bundle 'jsbeautify'
 Bundle 'Align'
 Bundle 'file-line'
 Bundle 'The-NERD-tree'
 Bundle 'Syntastic'
 Bundle 'Tagbar'
 Bundle 'https://github.com/pangloss/vim-javascript.git'
 Bundle 'vim-coffee-script'
 Bundle 'https://github.com/digitaltoad/vim-jade.git'
 Bundle 'https://github.com/wavded/vim-stylus.git'

 filetype plugin indent on              " required!

 set number
 set showmatch
 set shiftwidth=2
 set completeopt=menu,longest,preview
 set softtabstop=2
 set tabstop=2
 set wildignore=*.o,*~,*.pyc

 " Auto change directory to current file's directory
 autocmd BufEnter * lcd %:p:h

 " This beauty remembers where you were the last time you edited the file, and returns to the same position.
 au BufReadPost * if line("'\"") > 0|if line("'\"") <= line("$")|exe("norm '\"")|else|exe "norm $"|endif|endif
        "
        " Highlight JSON as javascript -- usefull if you don't want to load json.vim
        autocmd BufNewFile,BufRead *.json set ft=javascript

        "Trim trailing whitespace in javascript files
        autocmd BufWritePre *.js normal m`:%s/\s\+$//e ``

        " map simple ctrl keys for split/window movement and sizing
        map <C-J> <C-W>j
        map <C-K> <C-W>k
        map <C-H> <C-W>h
        map <C-L> <C-W>l
        map <C-M> <C-W>_
        map <C-N> <C-W>-

        let g:tagbar_ctags_bin = '/usr/local/bin/ctags'
