<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h1>Iniciar sesión</h1>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="login\ctr_login.php" method="POST">
          <!-- Primer input -->
          <div class="form-group">
            <label for="input-one" class="col-form-label">Codigo</label>
            <input type="text" class="form-control" id="input-one" name = "codigo" placeholder="Ingrese el valor">
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </form>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
