package one.digital.innovation.classes.usuario;

public class SuperUsuairo {

    private String login;
    private String senha;
    String nome;

    public SuperUsuairo(final String login, final simString senha) {
        this.login = login;
        this.senha = senha;

    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
